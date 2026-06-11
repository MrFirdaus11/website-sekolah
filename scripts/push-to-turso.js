import { createClient } from '@libsql/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const client = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
})

const sqlPath = resolve(__dirname, '..', 'drizzle', '0000_omniscient_orphan.sql')
const sql = readFileSync(sqlPath, 'utf8')

const statements = sql
  .split(';')
  .map((s) => s.trim())
  .filter((s) => s.length > 0)

for (const stmt of statements) {
  try {
    await client.execute(stmt + ';')
    console.log('OK:', stmt.slice(0, 60) + '...')
  } catch (e) {
    if (e.message.includes('already exists')) {
      console.log('SKIP (exists):', stmt.slice(0, 60) + '...')
    } else {
      console.error('ERR:', e.message)
    }
  }
}

console.log('Done!')
process.exit(0)
