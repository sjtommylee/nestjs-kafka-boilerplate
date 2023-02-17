FROM node:14-alpine

# Install Java Runtime Environment for Kafdrop
RUN apk add --no-cache openjdk8

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Expose the port for Kafdrop
EXPOSE 9000

# Start Kafdrop and NestJS app
CMD ["npm", "run", "start:dev"]
