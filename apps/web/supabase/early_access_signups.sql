-- Run this once in your Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run).

create table if not exists public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  city text not null,
  interest text not null,
  note text,
  created_at timestamptz not null default now()
);

-- Row Level Security: locked down by default. The API route uses the
-- service_role key, which bypasses RLS, so no policies are required for
-- the app to work. This just stops anyone from reading/writing the table
-- directly via the public anon key.
alter table public.early_access_signups enable row level security;
