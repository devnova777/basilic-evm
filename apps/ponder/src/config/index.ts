export const indexerConfig = {
  database: {
    url: process.env.PONDER_DATABASE_URL || '',
  },
  api: {
    key: process.env.PONDER_API_KEY || '',
    secret: process.env.PONDER_API_SECRET || '',
  },
  services: {
    logging: {
      level: process.env.PONDER_LOGGING_LEVEL || 'info',
    },
  },
} as const
