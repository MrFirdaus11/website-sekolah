import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './lib/schema.js',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL || './db/sekolah.db',
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
})
