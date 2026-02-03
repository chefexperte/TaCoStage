# build stage
FROM node:25-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm

# base stage
FROM base AS build
WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm prune --prod

# production stage
FROM base AS runner
WORKDIR /app

COPY scripts/ ./scripts
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/drizzle ./drizzle
COPY --from=build /app/drizzle.config.ts ./drizzle.config.ts
COPY --from=build /app/entrypoint.sh ./entrypoint.sh

EXPOSE 3000
ENV NODE_ENV=production

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["node", "build"]
