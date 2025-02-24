#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print status messages
print_status() {
    echo -e "${GREEN}=>${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}=>${NC} $1"
}

print_error() {
    echo -e "${RED}=>${NC} $1"
}

# Error handling
set -e

# Store the original directory
ORIGINAL_DIR=$(pwd)
SUPABASE_DIR="packages/supabase"

# Ensure Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    print_error "Supabase CLI is not installed. Please install it first."
    exit 1
fi

# Start Supabase without migrations and seeds
print_status "Starting Supabase without migrations and seeds..."
supabase stop --no-backup --workdir "$SUPABASE_DIR"
supabase start --workdir "$SUPABASE_DIR" &
SUPABASE_PID=$!

# Wait for Supabase to be ready
print_status "Waiting for Supabase to be ready..."
TIMEOUT=300 # enough time for first run to download docker images
COUNTER=0
until curl -s http://localhost:54323/rest/v1/ > /dev/null; do
    sleep 1
    COUNTER=$((COUNTER + 1))
    if [ $COUNTER -ge $TIMEOUT ]; then
        print_error "Timeout waiting for Supabase"
        kill $SUPABASE_PID 2>/dev/null
        exit 1
    fi
done

# Start Ponder
print_status "Starting Ponder..."
cd apps/ponder
bun run silent &
PONDER_PID=$!
cd "$ORIGINAL_DIR"

print_status "All services are running!"
print_warning "Press Ctrl+C to stop all services."

# Cleanup function
cleanup() {
    print_status "Cleaning up..."
    kill $SUPABASE_PID $PONDER_PID 2>/dev/null || true
    cd "$ORIGINAL_DIR" 2>/dev/null || true
}

# Register cleanup on script exit
trap cleanup EXIT

# Wait for user interrupt
wait $SUPABASE_PID $PONDER_PID
