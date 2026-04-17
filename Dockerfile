FROM node:22-slim

WORKDIR /app

# Install mcp-server dependencies
COPY mcp-server/package.json ./mcp-server/
RUN cd mcp-server && npm install --omit=dev

# Copy server source
COPY mcp-server/server.js ./mcp-server/

# Copy only the data directories the server reads at runtime
COPY public/json ./public/json
COPY public/raw ./public/raw

ENV PORT=8080
EXPOSE 8080

CMD ["node", "mcp-server/server.js"]
