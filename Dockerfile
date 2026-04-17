# =========================
# Stage 1: Build
# =========================
FROM node:22-slim AS builder

WORKDIR /app

# Copy root package (for build:docs)
COPY package.json package-lock.json* ./

# Install root dependencies (needed for build:docs)
RUN npm install

# Copy JSON builder package
COPY json/package.json ./json/
COPY json/package-lock.json* ./json/

# Install dependencies for JSON builder
RUN cd json && npm install

# Copy full project source
COPY . .

# Ensure output directories exist
RUN mkdir -p /app/public/json /app/public/raw

# Step 1: build JSON
RUN cd json && npm run build

# Step 2: build docs from root
RUN npm run build:docs


# =========================
# Stage 2: Runtime (MCP Server)
# =========================
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy MCP server package
COPY mcp-server/package.json ./mcp-server/
COPY mcp-server/package-lock.json* ./mcp-server/

# Install production dependencies only
RUN cd mcp-server && npm install --omit=dev

# Copy MCP server source
COPY mcp-server/server.js ./mcp-server/

# Copy final build output (IMPORTANT: same path as runtime expects)
COPY --from=builder /app/public/json ./public/json
COPY --from=builder /app/public/raw ./public/raw

EXPOSE 8080

CMD ["node", "mcp-server/server.js"]