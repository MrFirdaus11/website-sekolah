const bcrypt = require('bcryptjs')
const Database = require('better-sqlite3')
const { randomUUID } = require('crypto')

const db = new Database('db/sekolah.db')

const email = 'admin@sekolah.com'
const password = 'admin123'

const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email)
if (existing) {
  console.log('Admin user already exists (id:', existing.id, ')')
  process.exit(0)
}

const id = randomUUID()
const now = Math.floor(Date.now() / 1000)
const hashedPassword = bcrypt.hashSync(password, 10)

db.prepare(
  `INSERT INTO users (id, name, email, email_verified, password, role, created_at, updated_at)
   VALUES (?, ?, ?, 1, ?, 'admin', ?, ?)`
).run(id, 'Admin Sekolah', email, hashedPassword, now, now)

const accountId = randomUUID()
db.prepare(
  `INSERT INTO accounts (id, user_id, account_id, provider_id, password, created_at, updated_at)
   VALUES (?, ?, ?, 'email', ?, ?, ?)`
).run(accountId, id, email, hashedPassword, now, now)

console.log('Admin user created:')
console.log('  Email:', email)
console.log('  Password:', password)
console.log('  User ID:', id)

db.close()
