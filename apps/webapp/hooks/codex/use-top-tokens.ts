import { getTopTokens } from '@/services/codex'
import type { EnhancedToken } from '@definedfi/sdk/dist/sdk/generated/graphql'
import { useQuery } from '@tanstack/react-query'

export function useTopTokens(networkFilter?: number[]) {
  return useQuery<EnhancedToken[], Error>({
    queryKey: ['topTokens', networkFilter],
    queryFn: () => getTopTokens(networkFilter || []),
    staleTime: 60 * 60 * 1000, // 1 hour
    refetchInterval: 60 * 60 * 1000, // 1 hour
  })
}
