#!/bin/sh
set -e

echo "Running database migrations..."
pnpm db:migrate

printf "\nStarting the application.../n"
exec "$@"
