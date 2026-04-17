# =========================
# Stage 1: Build JSON
# =========================
FROM node:22-slim AS builder

WORKDIR /app

# Copy JSON builder package
COPY json/package.json ./json/
COPY json/package-lock.json* ./json/

# Install dependencies for JSON builder
RUN cd json && npm install

# Copy JSON source files
COPY json ./json

# Ensure output directory exists at root level
RUN mkdir -p /app/public/json /app/public/raw

# Run JSON build (must output to /app/public/json and /app/public/raw)
RUN cd json && npm run build


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

# Install only production dependencies
RUN cd mcp-server && npm install --omit=dev

# Copy MCP server source
COPY mcp-server/server.js ./mcp-server/

# Copy build result to SAME path structure
COPY --from=builder /app/public/json ./public/json
COPY --from=builder /app/public/raw ./public/raw

# Expose app port
EXPOSE 8080

# Start MCP server
CMD ["node", "mcp-server/server.js"]