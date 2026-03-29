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

ARG NEXT_PUBLIC_SITE_URL=https://flamastudio.ar
ARG NEXT_PUBLIC_PHONE_DISPLAY="0263 15-473-9193"
ARG NEXT_PUBLIC_PHONE_INTERNATIONAL=+549263154739193
ARG NEXT_PUBLIC_WHATSAPP_ID=549263154739193
ARG NEXT_PUBLIC_ADDRESS="Ladislao Segura 190, M5573 Junín, Mendoza"
ARG NEXT_PUBLIC_INSTAGRAM=flamastudio.ar
ARG NEXT_PUBLIC_MAPS_URL=https://maps.app.goo.gl/tDXcngSKQLuvmzuZ7
ARG NEXT_PUBLIC_HOURS="Lun a Vie, 9:30–17:30"

ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_PHONE_DISPLAY=$NEXT_PUBLIC_PHONE_DISPLAY
ENV NEXT_PUBLIC_PHONE_INTERNATIONAL=$NEXT_PUBLIC_PHONE_INTERNATIONAL
ENV NEXT_PUBLIC_WHATSAPP_ID=$NEXT_PUBLIC_WHATSAPP_ID
ENV NEXT_PUBLIC_ADDRESS=$NEXT_PUBLIC_ADDRESS
ENV NEXT_PUBLIC_INSTAGRAM=$NEXT_PUBLIC_INSTAGRAM
ENV NEXT_PUBLIC_MAPS_URL=$NEXT_PUBLIC_MAPS_URL
ENV NEXT_PUBLIC_HOURS=$NEXT_PUBLIC_HOURS

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

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
