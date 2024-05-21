
# Stage 1: Build the application with a lightweight Node.js 20 image
FROM node:20-alpine AS builder

# Installing yarn
RUN npm install -g yarn
RUN yarn set stable

# Set working directory
WORKDIR /app

# Copy package.json and lockfile (if any)
COPY package*.json ./

# Install dependencies using yarn (assuming production build is pre-built)
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the production build
RUN yarn build


# Stage 2: Serve the application using Nginx as a reverse proxy
FROM nginx:stable-alpine AS production

# Copy the build output to Nginx html directory
COPY --from=builder /app/.next /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html

# Copy the Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for web traffic
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
