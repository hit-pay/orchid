# =========================
# Stage 1: Build
# =========================
FROM node:22-slim AS builder

WORKDIR /app

# Copy root package files first for better layer caching
COPY package.json package-lock.json* ./

# Install root dependencies
RUN npm install

# Copy JSON builder package files
COPY json/package.json ./json/
COPY json/package-lock.json* ./json/

# Install JSON builder dependencies
RUN cd json && npm install

# Copy packages source before running JSON build
COPY packages ./packages

# Copy JSON source files
COPY json ./json

# Copy any remaining project files needed by root build:docs
COPY . .

# Ensure output directories exist
RUN mkdir -p /app/public/json /app/public/raw

# Build JSON from /packages source
RUN cd json && npm run build

# Build docs from root
RUN npm run build:docs


# =========================
# Stage 2: Runtime
# =========================
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy MCP server package files
COPY mcp-server/package.json ./mcp-server/
COPY mcp-server/package-lock.json* ./mcp-server/

# Install production dependencies only
RUN cd mcp-server && npm install --omit=dev

# Copy MCP server source
COPY mcp-server/server.js ./mcp-server/

# Copy generated output
COPY --from=builder /app/public/json ./public/json
COPY --from=builder /app/public/raw ./public/raw

EXPOSE 8080

CMD ["node", "mcp-server/server.js"]