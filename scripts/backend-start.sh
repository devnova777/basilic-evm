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
SUPABASE_DIR="apps/supabase"

# Source shared library
source "$(dirname "$0")/backend-lib.sh"

# Cleanup function
cleanup() {
    print_status "Cleaning up..."
    # Call backend-stop.sh to ensure proper cleanup
    "$(dirname "$0")/backend-stop.sh"
    if [ -n "${ORIGINAL_DIR:-}" ]; then
        cd "$ORIGINAL_DIR" 2>/dev/null || true
    fi
}

# Register cleanup on script exit
trap cleanup EXIT INT TERM

# Check Supabase CLI installation
check_supabase_cli

# Start Supabase without migrations and seeds
print_status "Starting Supabase without migrations and seeds..."
supabase stop --no-backup --workdir "$SUPABASE_DIR" || true
supabase start --workdir "$SUPABASE_DIR" &
SUPABASE_PID=$!

# Wait for Supabase to be ready
wait_for_supabase "$SUPABASE_PID"

# Start Ponder
start_ponder

print_status "All services are running!"
print_warning "Press Ctrl+C to stop all services."

# Wait for user interrupt
wait $SUPABASE_PID $PONDER_PID || true
