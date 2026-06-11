import db from '@/lib/db'
import { alumni } from '@/lib/schema'
import { desc } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.nama) {
      return NextResponse.json({ error: 'Nama wajib diisi' }, { status: 400 })
    }

    const result = await db.insert(alumni).values(body).returning()
    return NextResponse.json({ data: result[0] }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await db.select().from(alumni).orderBy(desc(alumni.createdAt))
    return NextResponse.json({ data: result })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
