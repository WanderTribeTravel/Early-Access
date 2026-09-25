import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '../../../lib/supabase/server'

const EMAIL_RE = /^\S+@\S+\.\S+$/

type SignupPayload = {
  name?: string
  email?: string
  city?: string
  interest?: string
  note?: string
}

export async function POST(request: Request) {
  let body: SignupPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const city = (body.city ?? '').trim()
  const interest = (body.interest ?? '').trim()
  const note = (body.note ?? '').trim()

  if (!name || !email || !city || !interest) {
    return NextResponse.json(
      { error: 'name, email, city, and interest are required.' },
      { status: 400 }
    )
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  try {
    const supabase = getSupabaseServerClient()

    const { error } = await supabase.from('early_access_signups').insert({
      name,
      email,
      city,
      interest,
      note: note || null,
    })

    if (error) {
      // Unique violation on email = someone signed up twice; treat as success.
      if (error.code === '23505') {
        return NextResponse.json({ ok: true, duplicate: true })
      }
      console.error('Supabase insert error:', error)
      return NextResponse.json(
        { error: 'Could not save signup. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Early access route error:', err)
    return NextResponse.json(
      { error: 'Server misconfiguration. Please try again later.' },
      { status: 500 }
    )
  }
}
