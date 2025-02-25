import { captureAppError } from '@repo/errors'
import type { SupaApiParams } from '../types'

export async function upsertUserAddress({
  address,
  supabase,
}: SupaApiParams & {
  address: string
}) {
  const { data, error } = await supabase
    .from('User')
    .upsert({ address })
    .select()
    .single()

  if (error || !data)
    captureAppError({
      code: 'FETCH_ERROR',
      error: error || new Error('No data returned'),
      label: 'upsertUserAddress',
    })

  return data as NonNullable<typeof data>
}
