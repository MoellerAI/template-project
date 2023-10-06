#!/bin/sh

set -e

echo "Pruning unused containers, networks, and dangling images"

docker system prune -f

# Build the Docker container
echo "Building Docker container"

docker build -t backend:latest .

echo "Loading env variables"

if [ -f .env ]; then
    env_vars=$(cat .env | grep -v '^#' | xargs printf -- '-e %s ')
else
    env_vars=""
fi

# Start the Docker container
echo "Starting Docker container"

docker run -v $(pwd)/backend:/app/app $env_vars -d -p 8000:8000 --name backend-container backend:latest

# Print success message
echo "Backend container started successfully!"
