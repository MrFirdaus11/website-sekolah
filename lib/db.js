import * as schema from './schema'

let db

try {
  const { createClient } = await import('@libsql/client')
  const { drizzle } = await import('drizzle-orm/libsql')
  const client = createClient({
    url: process.env.DATABASE_URL || 'file:./db/sekolah.db',
    authToken: process.env.DATABASE_AUTH_TOKEN,
  })
  db = drizzle(client, { schema })
} catch {
  const Database = (await import('better-sqlite3')).default
  const { drizzle } = await import('drizzle-orm/better-sqlite3')
  const sqlite = new Database(process.env.DATABASE_LOCAL || './db/sekolah.db')
  sqlite.pragma('journal_mode = WAL')
  sqlite.pragma('foreign_keys = ON')
  db = drizzle(sqlite, { schema })
}

export default db
