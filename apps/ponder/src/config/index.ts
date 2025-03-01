export const ponderConfig = {
  database: {
    url: process.env.PONDER_DATABASE_URL || '',
    user: process.env.PONDER_DATABASE_USER || '',
    password: process.env.PONDER_DATABASE_PASSWORD || '',
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
