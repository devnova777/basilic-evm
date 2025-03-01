import { createClient, desc } from '@ponder/client'
import { getPonderQueryOptions } from '@ponder/react'
import * as schema from '@repo/ponder/schema'

const client = createClient('http://localhost:42069/sql', { schema })

const swapsQueryOptions = getPonderQueryOptions(client, (db) =>
  db
    .select()
    .from(schema.SwapEvent)
    .orderBy(desc(schema.SwapEvent.timestamp))
    .limit(10),
)

type Swaps = Awaited<ReturnType<typeof swapsQueryOptions.queryFn>>

export { client, schema, swapsQueryOptions, type Swaps }
