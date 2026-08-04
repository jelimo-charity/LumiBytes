# Stage 1: Build
# We use an official Node.js image with the Alpine Linux distribution
# to build our application. This image is very small and has Node.js
# pre-installed.
FROM node:20-alpine AS builder

# Create a new directory in the container at /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies listed in package.json
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Run the build script (as defined in package.json)
RUN npm run build

# Stage 2: Serve
# We use an official Nginx image with the Alpine Linux distribution
# to serve our application. This image is very small and has Nginx
# pre-installed.
FROM nginx:alpine

# Copy the built application code from the previous stage to the
# current stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 from the container to the host
EXPOSE 80

# Set the default command to run when the container starts
# This command starts Nginx with the configuration file at
# /etc/nginx/nginx.conf and runs it in the foreground
CMD ["nginx", "-g", "daemon off;"]

