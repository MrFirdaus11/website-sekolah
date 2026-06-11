import db from '@/lib/db'
import { ppdbPendaftar } from '@/lib/schema'
import { desc } from 'drizzle-orm'
import { NextResponse } from 'next/server'

function generateNoReg() {
  const prefix = 'PPDB'
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `${prefix}-${timestamp}${random}`
}

export async function POST(request) {
  try {
    const body = await request.json()
    const noRegistrasi = generateNoReg()

    const result = await db.insert(ppdbPendaftar).values({
      ...body,
      noRegistrasi,
      status: 'Terdaftar',
    }).returning()

    return NextResponse.json({ data: result[0] }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await db.select().from(ppdbPendaftar).orderBy(desc(ppdbPendaftar.createdAt))
    return NextResponse.json({ data: result })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
