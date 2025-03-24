#!/bin/bash

# Exit on error, undefined variables, and pipe failures
set -euo pipefail

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Common variables
ORIGINAL_DIR=$(pwd)
SUPABASE_DIR="apps/supabase"
TIMEOUT=300 # enough time for first run to download docker images

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

# Function to check Supabase CLI installation
check_supabase_cli() {
    if ! command -v supabase &> /dev/null; then
        print_error "Supabase CLI is not installed. Please install it first."
        exit 1
    fi
}

# Function to wait for Supabase to be ready
wait_for_supabase() {
    local supabase_pid=$1
    print_status "Waiting for Supabase to be ready..."
    local counter=0
    until curl -s http://localhost:54323/rest/v1/ > /dev/null; do
        if ! is_process_running "$supabase_pid"; then
            print_error "Supabase process died unexpectedly"
            exit 1
        fi
        sleep 1
        counter=$((counter + 1))
        if [ $counter -ge $TIMEOUT ]; then
            print_error "Timeout waiting for Supabase"
            exit 1
        fi
    done
}

# Function to start Ponder
start_ponder() {
    print_status "Starting Ponder..."
    cd apps/ponder || exit 1

    # Check for .env.local file
    if [ ! -f ".env.local" ]; then
        print_error "No .env.local file found in apps/ponder. Please create it first."
        exit 1
    fi

    # Source .env.local file
    set -o allexport && source .env.local && set +o allexport

    bun run dev &
    PONDER_PID=$!
    cd "$ORIGINAL_DIR"

    # Verify Ponder started successfully
    sleep 2
    if ! is_process_running "$PONDER_PID"; then
        print_error "Ponder failed to start"
        exit 1
    fi
}

# Function to stop Supabase
stop_supabase() {
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
} 