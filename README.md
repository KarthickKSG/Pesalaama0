# Production SaaS Monorepo (Web + PWA + APK)

## Stack
- Turborepo monorepo
- Web: Next.js 14 App Router + Tailwind + PWA
- API: Fastify + Prisma + PostgreSQL + Redis
- Auth: JWT access/refresh + RBAC
- DevOps: Docker Compose + GitHub Actions + Nginx deploy

## Structure
- `apps/web`: BFF-friendly web frontend + PWA installable shell
- `apps/api`: API Gateway/BFF backend with modular services
- `prisma/schema.prisma`: DB schema with users, roles, permissions, activity logs
- `.github/workflows/ci.yml`: CI pipeline
- `deploy/nginx/app.conf`: reverse proxy baseline

## Run locally
```bash
pnpm install
docker compose up -d db redis
pnpm --filter @app/api dev
pnpm --filter @app/web dev
```

## Prisma
```bash
pnpm --filter @app/api exec prisma generate --schema ../../prisma/schema.prisma
pnpm --filter @app/api exec prisma migrate dev --schema ../../prisma/schema.prisma
```

## Security
- Helmet, CORS, rate limit
- bcrypt password hashing
- JWT + refresh token strategy
- Input validation with zod

## PWA + APK
- PWA manifest at `apps/web/public/manifest.json`
- Build APK with Capacitor:
```bash
cd apps/web
pnpm add @capacitor/core @capacitor/cli @capacitor/android
npx cap init Pesalaama com.pesalaama.app --web-dir=.next
pnpm build
npx cap add android
npx cap copy android
npx cap open android
```

## Production deployment
- Frontend: Vercel/Netlify (set `NEXT_PUBLIC_API_URL`)
- Backend: Ubuntu VPS + PM2 + Nginx
- DB: Managed PostgreSQL
- SSL: Let's Encrypt (`certbot --nginx -d app.example.com`)
