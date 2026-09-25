export type Profile = {
  id: string
  email: string
  full_name: string
  username: string

  bio: string | null
  avatar_url: string | null
  cover_url: string | null

  city: string | null
  country: string | null

  travel_styles: string[]
  languages: string[]
  countries_visited: string[]
  wishlist_countries: string[]

  hosting_enabled: boolean
  verification_level: number
  wander_trust_score: number

  created_at?: string
}