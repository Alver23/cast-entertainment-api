#!/bin/bash
env=${1};
if [ -z ${env} ]; then
        env="production";
fi
echo "production: " $env;

echo "ENV=$env"
docker-compose -f docker/docker-compose.yml down
docker-compose -f docker/docker-compose.yml build --no-cache
docker-compose -f docker/docker-compose.yml up
