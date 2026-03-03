import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'redis'
import { randomUUID } from 'crypto'

// ── Redis singleton ───────────────────────────────────────────────────────────

let redisClient: ReturnType<typeof createClient> | null = null

const reconnectStrategy = (retries: number) => {
  if (retries > 5) return new Error('Redis reconnect limit exceeded')
  return Math.min(retries * 100, 2000)
}

async function getClient() {
  if (redisClient && redisClient.isOpen) return redisClient

  redisClient = createClient({
    url: process.env.REDIS_URL
      ? `redis://${process.env.REDIS_URL}:6380`
      : 'redis://localhost:6379',
    password: process.env.REDIS_PASSWORD,
    // When REDIS_URL is set (Azure), tls must be literally `true` — not boolean.
    socket: process.env.REDIS_URL
      ? { tls: true as const, rejectUnauthorized: false, reconnectStrategy }
      : { reconnectStrategy },
  })

  redisClient.on('error', (err) => console.error('Leads Redis error:', err))
  await redisClient.connect()
  return redisClient
}

// ── POST /api/leads ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { plan, name, surname, email, phone } = body as Record<string, string>

  if (!plan || !['trial', 'professional'].includes(plan))
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  if (!name?.trim())
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  if (!surname?.trim())
    return NextResponse.json({ error: 'Surname is required' }, { status: 400 })
  if (!email?.includes('@'))
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })

  const lead = {
    id:        randomUUID(),
    plan,
    name:      name.trim(),
    surname:   surname.trim(),
    email:     email.trim().toLowerCase(),
    phone:     phone?.trim() || null,
    createdAt: new Date().toISOString(),
  }

  try {
    const client = await getClient()
    await client.set(`lead:${lead.id}`, JSON.stringify(lead))
    await client.lPush('leads:index', lead.id)
    console.log(`Lead saved: ${lead.email} (${plan})`)
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (err) {
    console.error('Failed to save lead:', err)
    return NextResponse.json(
      { error: 'Could not save. Please try again.' },
      { status: 500 }
    )
  }
}
