import db from '@/lib/db'
import { ppdbPendaftar } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { noRegistrasi } = body

    if (!noRegistrasi) {
      return NextResponse.json({ error: 'Nomor registrasi wajib diisi' }, { status: 400 })
    }

    const result = await db.select().from(ppdbPendaftar)
      .where(eq(ppdbPendaftar.noRegistrasi, noRegistrasi))

    if (!result.length) {
      return NextResponse.json({ error: 'Nomor registrasi tidak ditemukan' }, { status: 404 })
    }

    return NextResponse.json({ data: result[0] })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
