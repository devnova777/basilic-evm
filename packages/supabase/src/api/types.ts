import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '../supa.types'

export interface SupaApiParams {
  supabase: SupabaseClient<Database>
}
