# syntax=docker/dockerfile:1

########################
# deps
########################
FROM node:22-alpine AS deps
WORKDIR /app

# required by some deps (sharp, etc.)
RUN apk add --no-cache libc6-compat

COPY package*.json ./
RUN npm ci


########################
# builder
########################
FROM node:22-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build


########################
# runner (non-root + tini)
########################
FROM node:22-alpine AS runner
WORKDIR /app

RUN apk add --no-cache tini libc6-compat

# create non-root user
RUN addgroup -S app && adduser -S app -G app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
EXPOSE 3000

# copy only what we need to run
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.* ./ 2>/dev/null || true
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# if you use standalone output, you can switch to that (see note below)
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static

RUN chown -R app:app /app
USER app

ENTRYPOINT ["/sbin/tini","--"]
CMD ["npm","run","start"]
