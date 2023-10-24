#!/bin/sh

set -e

echo "Pruning unused containers, networks, and dangling images"
docker system prune -f

echo "Building Docker container for development"
docker build -t backend:dev .

echo "Loading env variables"
if [ -f .env ]; then
    env_vars=$(grep -v '^#' .env | grep '=' | xargs printf -- '-e %s ')
else
    env_vars=""
fi

echo "Starting Docker container for development"
docker run -it -v $(pwd)/backend/src:/app/backend/src $env_vars -p 8000:8000 --name backend-container backend:dev

echo "Backend container started successfully for development!"
