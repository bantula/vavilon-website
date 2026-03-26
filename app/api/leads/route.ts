import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { BlobServiceClient } from '@azure/storage-blob'

// ── Blob Storage ──────────────────────────────────────────────────────────────

async function appendLeadToBlob(lead: object) {
  const connStr = process.env.AZURE_STORAGE_CONNECTION_STRING
  if (!connStr) throw new Error('AZURE_STORAGE_CONNECTION_STRING not set')

  const blobService  = BlobServiceClient.fromConnectionString(connStr)
  const container    = blobService.getContainerClient('leads')
  const appendBlob   = container.getAppendBlobClient('leads.jsonl')

  await appendBlob.createIfNotExists()
  const line = JSON.stringify(lead) + '\n'
  await appendBlob.appendBlock(line, Buffer.byteLength(line))
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

  console.log(`[lead:received] ${JSON.stringify(lead)}`)

  try {
    await appendLeadToBlob(lead)
    console.log(`[lead:saved] id=${lead.id}`)
  } catch (err) {
    console.error(`[lead:blob-error] id=${lead.id}`, err)
    // Still return ok — lead is in logs; don't show error to user
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
