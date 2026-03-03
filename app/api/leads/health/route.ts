import { getClient } from '../_redis'

export async function GET() {
  try {
    const client = await getClient()
    await client.ping()
    return Response.json({ redis: 'ok' })
  } catch (err) {
    return Response.json({ redis: 'error', message: String(err) }, { status: 500 })
  }
}
