#!/bin/sh

set -e

echo "Pruning unused containers, networks, and dangling images"
docker system prune -f

echo "Building Docker container for development"
docker build -t backend:dev .

echo "Loading env variables"
if [ -f .env ]; then
    env_vars=$(cat .env | grep -v '^#' | xargs printf -- '-e %s ')
else
    env_vars=""
fi

echo "Starting Docker container for development"
docker run -v $(pwd)/backend/src:/app/backend/src -v $(pwd)/frontend:/app/frontend $env_vars -d -p 8000:8000 --name backend-container backend:dev

echo "Backend container started successfully for development!"
