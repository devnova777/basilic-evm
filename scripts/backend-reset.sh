#!/bin/bash

# Exit on error, undefined variables, and pipe failures
set -euo pipefail

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
    echo -e "${RED}=>${NC} $1" >&2
}

# Function to check if a process is running
is_process_running() {
    local pid=$1
    [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null
}

# Store the original directory
ORIGINAL_DIR=$(pwd)
SUPABASE_DIR="apps/db"

# Ensure Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    print_error "Supabase CLI is not installed. Please install it first."
    exit 1
fi

# Cleanup function
cleanup() {
    print_status "Cleaning up..."
    if [ -n "${SUPABASE_PID:-}" ]; then
        kill "$SUPABASE_PID" 2>/dev/null || true
    fi
    if [ -n "${PONDER_PID:-}" ]; then
        kill "$PONDER_PID" 2>/dev/null || true
    fi
    if [ -n "${ORIGINAL_DIR:-}" ]; then
        cd "$ORIGINAL_DIR" 2>/dev/null || true
    fi
}

# Register cleanup on script exit
trap cleanup EXIT INT TERM

# Start Supabase without migrations and seeds
print_status "Starting Supabase without migrations and seeds..."
supabase stop --no-backup --destroy --workdir "$SUPABASE_DIR" || true
supabase start --workdir "$SUPABASE_DIR" &
SUPABASE_PID=$!

# Wait for Supabase to be ready
print_status "Waiting for Supabase to be ready..."
TIMEOUT=300 # enough time for first run to download docker images
COUNTER=0
until curl -s http://localhost:54323/rest/v1/ > /dev/null; do
    if ! is_process_running "$SUPABASE_PID"; then
        print_error "Supabase process died unexpectedly"
        exit 1
    fi
    sleep 1
    COUNTER=$((COUNTER + 1))
    if [ $COUNTER -ge $TIMEOUT ]; then
        print_error "Timeout waiting for Supabase"
        exit 1
    fi
done

# Start Ponder
print_status "Starting Ponder..."
cd apps/ponder || exit 1

# Check for .env.local file
if [ ! -f ".env.local" ]; then
    print_error "No .env.local file found in apps/ponder. Please create it first."
    exit 1
fi

# Run with env vars directly from .env.local
eval "$(cat .env.local | sed 's/^/export /')" && bun run dev &
PONDER_PID=$!
cd "$ORIGINAL_DIR"

# Verify Ponder started successfully
sleep 2
if ! is_process_running "$PONDER_PID"; then
    print_error "Ponder failed to start"
    exit 1
fi

print_status "All services are running!"
print_warning "Press Ctrl+C to stop all services."

# Wait for user interrupt
wait $SUPABASE_PID $PONDER_PID || true
