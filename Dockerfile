# Stage 1: Build
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json / yarn.lock
COPY package.json package-lock.json* yarn.lock* ./

# Install dependencies
RUN npm ci

# Copy semua source code
COPY . .

# Build production
RUN npm run build

# Stage 2: Serve hasil build dengan nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
