FROM node:20-alpine AS base
RUN corepack enable
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build
CMD ["pnpm","dev"]
