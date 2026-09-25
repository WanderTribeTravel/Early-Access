import { createClient } from '@supabase/supabase-js'

/**
 * Server-only Supabase client.
 *
 * Uses the service role key so it can insert rows even with RLS enabled
 * on the `early_access_signups` table. This file must never be imported
 * from a 'use client' component — only from API routes / server actions.
 */
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    throw new Error(
      'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables.'
    )
  }

  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  })
}
