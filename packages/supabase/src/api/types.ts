import type { Database } from '@repo/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'

export interface SupaApiParams {
  supabase: SupabaseClient<Database>
}
