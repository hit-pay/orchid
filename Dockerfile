# =========================
# Stage 1: Build
# =========================
FROM node:22-slim AS builder

WORKDIR /app

# Copy the package files first so that the install cache is more optimal
COPY package.json package-lock.json* ./
COPY mcp-server/package.json ./mcp-server/

# Install all dependencies for build requirements
RUN npm install

# Copy all project sources
COPY . .

# Generate JSON/build artifacts
RUN npm run build:json


# =========================
# Stage 2: Runtime
# =========================
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy the mcp-server package file
COPY mcp-server/package.json ./mcp-server/

# Install runtime dependencies for mcp-server only
RUN cd mcp-server && npm install --omit=dev

# Copy server source
COPY mcp-server/server.js ./mcp-server/

# Copy the required build results at runtime
COPY --from=builder /app/public/json ./public/json
COPY --from=builder /app/public/raw ./public/raw

EXPOSE 8080

CMD ["node", "mcp-server/server.js"]