# Use official Node.js LTS version image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package.json and package-lock.json (if any)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into container
COPY . .

# Expose port 3000 to outside world
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
