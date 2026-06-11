import db from '@/lib/db'
import { galeriFoto, galeriVideo } from '@/lib/schema'
import { desc, eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type') || 'foto'
  const album = searchParams.get('album')

  try {
    if (type === 'video') {
      let query = db.select().from(galeriVideo).orderBy(desc(galeriVideo.createdAt))
      const result = await query
      return NextResponse.json({ data: result })
    }

    let query = db.select().from(galeriFoto).orderBy(desc(galeriFoto.createdAt))
    if (album) {
      query = query.where(eq(galeriFoto.album, album))
    }
    const result = await query
    return NextResponse.json({ data: result })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const type = body.type || 'foto'

    if (type === 'video') {
      const result = await db.insert(galeriVideo).values(body).returning()
      return NextResponse.json({ data: result[0] }, { status: 201 })
    }

    const result = await db.insert(galeriFoto).values(body).returning()
    return NextResponse.json({ data: result[0] }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
