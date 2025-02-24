// dont export this on @repo/supabase

export const supaConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  connectionString: process.env.SUPABASE_CONN_STRING || '',
} as const

if (!supaConfig.url) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL')
if (!supaConfig.anonKey)
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY')

// if (!supaConfig.connectionString)
//   throw new Error('Missing SUPABASE_CONN_STRING')
// if (!supaConfig.serviceRoleKey)
//   throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY')
