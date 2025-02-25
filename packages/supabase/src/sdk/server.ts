import type { Database } from '../supa.types'
import { createClient } from '@supabase/supabase-js'
import { supaConfig } from './config'

export const createSupabaseServerClient = () => {
  return createClient<Database>(supaConfig.url, supaConfig.serviceRoleKey)
}
