import { createClient } from 'redis'

let redisClient: ReturnType<typeof createClient> | null = null

const reconnectStrategy = (retries: number) => {
  if (retries > 5) return new Error('Redis reconnect limit exceeded')
  return Math.min(retries * 100, 2000)
}

export async function getClient() {
  if (redisClient && redisClient.isOpen) return redisClient

  redisClient = createClient({
    url: process.env.REDIS_URL
      ? `redis://${process.env.REDIS_URL}:6380`
      : 'redis://localhost:6379',
    password: process.env.REDIS_PASSWORD,
    socket: process.env.REDIS_URL
      ? { tls: true as const, rejectUnauthorized: false, reconnectStrategy }
      : { reconnectStrategy },
  })

  redisClient.on('error', (err) => console.error('Leads Redis error:', err))
  await redisClient.connect()
  return redisClient
}
