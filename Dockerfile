# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Install dependencies for sharp
RUN apk add --no-cache \
  build-base \
  gcc \
  musl-dev \
  libc6-compat \
  libpng-dev \
  libjpeg-turbo-dev \
  vips-dev

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start"]
