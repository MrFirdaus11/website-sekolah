import db from '@/lib/db'
import { berita } from '@/lib/schema'
import { desc, eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { slugify } from '@/lib/utils'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')
  const kategori = searchParams.get('kategori')
  const limit = parseInt(searchParams.get('limit') || '10')
  const offset = parseInt(searchParams.get('offset') || '0')

  try {
    if (slug) {
      const result = await db.select().from(berita).where(eq(berita.slug, slug)).limit(1)
      return NextResponse.json({ data: result[0] || null })
    }

    let query = db.select().from(berita).orderBy(desc(berita.createdAt))

    if (kategori && kategori !== 'all') {
      query = query.where(eq(berita.kategori, kategori))
    }

    const result = await query.limit(limit).offset(offset)
    return NextResponse.json({ data: result })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const slug = slugify(body.judul)

    const result = await db.insert(berita).values({
      ...body,
      slug,
    }).returning()

    return NextResponse.json({ data: result[0] }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
