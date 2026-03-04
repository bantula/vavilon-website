import { createClient } from 'redis'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local if it exists
try {
  const env = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
  for (const line of env.split('\n')) {
    const [key, ...rest] = line.split('=')
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
  }
} catch {}

const client = createClient({
  url: process.env.REDIS_URL
    ? `rediss://${process.env.REDIS_URL}:6380`
    : 'redis://localhost:6379',
  password: process.env.REDIS_PASSWORD,
  socket: process.env.REDIS_URL
    ? { rejectUnauthorized: false }
    : {},
})

await client.connect()

const ids = await client.lRange('leads:index', 0, -1)
console.log(`\nTotal leads: ${ids.length}\n`)

for (const id of ids) {
  const lead = JSON.parse(await client.get(`lead:${id}`))
  const date = new Date(lead.createdAt).toLocaleString()
  console.log(`[${date}]  ${lead.plan.padEnd(12)}  ${lead.name} ${lead.surname}  <${lead.email}>${lead.phone ? '  📞 ' + lead.phone : ''}`)
}

console.log()
await client.disconnect()
