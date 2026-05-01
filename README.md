# Firebase Healthcare SaaS Monorepo

This project now uses **Firebase-first architecture** for auth and database.

## Firebase Configuration (active)
Configured in `apps/web/lib/firebase.ts` with:
- apiKey: `AIzaSyB3SjC0pWLmWcUCx6ptlLT-wd8WZwKR8fs`
- authDomain: `tool-traker.firebaseapp.com`
- databaseURL: `https://tool-traker-default-rtdb.firebaseio.com`
- projectId: `tool-traker`
- storageBucket: `tool-traker.firebasestorage.app`
- messagingSenderId: `772466342999`
- appId: `1:772466342999:web:f17626094f327d3ebab712`
- measurementId: `G-DLNBFW2NFS`

## Required Pages Implemented
- landing
- client-registration
- prebooking
- signin (single sign in for all users)
- admin (create doctor)
- doctor
- patient
- appointments
- notifications
- profile
- settings
- help
- reports

## Core Flows
1. Unified SignIn (`/signin`) reads user role and routes to `/admin`, `/doctor`, or `/patient`.
2. Admin creates doctor accounts via `POST /api/admin/create-doctor`.
3. Client registration and prebooking are submitted to Firebase via route handlers.

## Run
```bash
pnpm install
pnpm --filter @app/web dev
```
