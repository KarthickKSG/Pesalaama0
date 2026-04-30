# Healthcare SaaS Monorepo (Web + PWA + APK)

## Highlights
- Next.js App Router full-stack app using Firebase Authentication + Firestore database.
- Unified Sign In page for all users (`/signin`) with role routing to admin, doctor, patient dashboards.
- Admin-only doctor account creation flow via server route and Firebase Admin SDK.
- Minimum 12 pages included: landing, client-registration, prebooking, signin, admin, doctor, patient, appointments, notifications, profile, settings, help, reports.

## Key Routes
- `/landing`
- `/client-registration`
- `/prebooking`
- `/signin`
- `/admin` (create doctor account)
- `/doctor`
- `/patient`
- `/appointments`
- `/notifications`
- `/profile`
- `/settings`
- `/help`
- `/reports`

## Firebase Setup
Create `.env.local` in `apps/web`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Run
```bash
pnpm install
pnpm --filter @app/web dev
```

## API Endpoints (Next Route Handlers)
- `POST /api/client-registration`
- `POST /api/prebooking`
- `POST /api/admin/create-doctor`

## APK
Use Capacitor with the built PWA:
```bash
cd apps/web
pnpm build
npx cap add android
npx cap copy android
npx cap open android
```
