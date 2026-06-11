import db from '@/lib/db'
import { berita } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function GET(_, { params }) {
  try {
    const { id } = await params
    const result = await db.select().from(berita).where(
      isNaN(id) ? eq(berita.slug, id) : eq(berita.id, parseInt(id))
    )
    if (!result.length) {
      return NextResponse.json({ error: 'Berita tidak ditemukan' }, { status: 404 })
    }
    return NextResponse.json({ data: result[0] })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()
    const result = await db.update(berita)
      .set({ ...body, updatedAt: new Date().toISOString() })
      .where(eq(berita.id, parseInt(id)))
      .returning()
    return NextResponse.json({ data: result[0] })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(_, { params }) {
  try {
    const { id } = await params
    await db.delete(berita).where(eq(berita.id, parseInt(id)))
    return NextResponse.json({ message: 'Berita berhasil dihapus' })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
