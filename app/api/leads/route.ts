import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { getClient } from './_redis'

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

  // Always log so data is captured in Azure Monitor even if Redis is unavailable
  console.log(`[lead:received] ${JSON.stringify(lead)}`)

  try {
    const client = await getClient()
    await client.set(`lead:${lead.id}`, JSON.stringify(lead))
    await client.lPush('leads:index', lead.id)
    console.log(`[lead:saved] id=${lead.id}`)
  } catch (err) {
    // Redis unavailable — lead is still in stdout logs above; don't fail the user
    console.error(`[lead:redis-error] id=${lead.id}`, err)
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
