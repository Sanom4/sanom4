# Use an official Node.js runtime as the base image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on (usually 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]