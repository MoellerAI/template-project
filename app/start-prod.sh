#!/bin/sh

set -e

echo "Pruning unused containers, networks, and dangling images"
docker system prune -f

echo "Building Docker container for production"
docker build -t backend:prod .

echo "Loading env variables"
if [ -f .env ]; then
    env_vars=$(cat .env | grep -v '^#' | xargs printf -- '-e %s ')
else
    env_vars=""
fi

echo "Starting Docker container for production"
docker run $env_vars -d -p 8000:8000 --name backend-container backend:prod

echo "Backend container started successfully for production!"
