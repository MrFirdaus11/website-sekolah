import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './lib/schema.js',
  out: './drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: './db/sekolah.db',
  },
})
