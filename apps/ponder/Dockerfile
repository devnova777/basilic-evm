FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# Copy source code
COPY . .

# Build the application
RUN pnpm run codegen

# Expose the default Ponder port
EXPOSE 42069

# Start the application
CMD ["pnpm", "run", "dev"] 