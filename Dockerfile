FROM node:latest

USER node

# Create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

EXPOSE 3000
