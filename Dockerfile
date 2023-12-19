# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /

# Install dependencies based on the preferred package manager

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /.next/static ./.next/static


# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on (usually 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]