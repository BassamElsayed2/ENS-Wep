# ---- deps ----
FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# ---- build ----
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- run (non-root) ----
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# create non-root user
RUN addgroup -S app && adduser -S app -G app

# copy built app
COPY --from=builder /app ./

# permissions
RUN chown -R app:app /app

USER app
EXPOSE 3000
CMD ["npm","run","start"]
