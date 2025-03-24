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

# Function to gracefully stop processes
stop_process() {
    local pid=$1
    local name=$2
    local timeout=${3:-10}  # Default timeout of 10 seconds
    
    if ! is_process_running "$pid"; then
        print_warning "$name (PID: $pid) is not running"
        return 0
    fi
    
    print_status "Stopping $name (PID: $pid)..."
    kill -TERM "$pid" 2>/dev/null || return 1
    
    # Wait for process to stop gracefully
    local counter=0
    while is_process_running "$pid" && [ $counter -lt $timeout ]; do
        sleep 1
        counter=$((counter + 1))
    done
    
    if is_process_running "$pid"; then
        print_warning "$name didn't stop gracefully after ${timeout}s, forcing..."
        kill -9 "$pid" 2>/dev/null || true
        sleep 1  # Give OS time to clean up
    else
        print_status "$name stopped successfully"
    fi
}

# Cleanup function
cleanup() {
    if [ -n "${ORIGINAL_DIR:-}" ]; then
        cd "$ORIGINAL_DIR"
    fi
}

# Register cleanup on script exit
trap cleanup EXIT

# Store the original directory
ORIGINAL_DIR=$(pwd)
SUPABASE_DIR="apps/supabase"

# Ensure Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    print_error "Supabase CLI is not installed. Please install it first."
    exit 1
fi

# Find and stop Ponder process
PONDER_PID=$(pgrep -f "bun run silent" || true)
if [ -n "${PONDER_PID:-}" ]; then
    stop_process "$PONDER_PID" "Ponder" 15  # Give Ponder 15 seconds to shutdown
else
    print_warning "No running Ponder process found"
fi

# Stop Supabase with timeout
print_status "Stopping Supabase..."
if ! command -v timeout &> /dev/null; then
    # If timeout is not available, run without it
    if ! supabase stop --workdir "$SUPABASE_DIR"; then
        print_error "Failed to stop Supabase"
        exit 1
    fi
else
    # Use timeout command if available
    if ! timeout 30s supabase stop --workdir "$SUPABASE_DIR"; then
        print_error "Supabase stop timed out after 30 seconds"
        exit 1
    fi
fi

print_status "All services have been stopped!"
