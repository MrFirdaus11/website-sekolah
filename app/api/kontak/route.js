import db from '@/lib/db'
import { kontakPesan } from '@/lib/schema'
import { desc } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.nama || !body.email || !body.pesan) {
      return NextResponse.json({ error: 'Nama, email, dan pesan wajib diisi' }, { status: 400 })
    }

    const result = await db.insert(kontakPesan).values({
      nama: body.nama,
      email: body.email,
      kategori: body.kategori || null,
      pesan: body.pesan,
    }).returning()

    return NextResponse.json({ data: result[0] }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const result = await db.select().from(kontakPesan).orderBy(desc(kontakPesan.createdAt))
    return NextResponse.json({ data: result })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
