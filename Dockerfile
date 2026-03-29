FROM node:22-alpine AS base

# --- Dependencies ---
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# --- Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Placeholders get baked into JS at build time,
# then replaced at container start by entrypoint.sh
ENV NEXT_PUBLIC_SITE_URL=https://flamastudio.ar
ENV NEXT_PUBLIC_PHONE_DISPLAY=__PHONE_DISPLAY__
ENV NEXT_PUBLIC_PHONE_INTERNATIONAL=__PHONE_INTERNATIONAL__
ENV NEXT_PUBLIC_WHATSAPP_ID=__WHATSAPP_ID__
ENV NEXT_PUBLIC_ADDRESS=__ADDRESS__
ENV NEXT_PUBLIC_INSTAGRAM=__INSTAGRAM__
ENV NEXT_PUBLIC_MAPS_URL=__MAPS_URL__
ENV NEXT_PUBLIC_HOURS=__HOURS__

RUN npm run build

# --- Runner ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

USER nextjs

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
