import { appConfig } from '@/lib/config'
import { setClientToken } from '@repo/0x-api'

setClientToken(appConfig.services.zeroExToken)

export * from '@repo/0x-api'
