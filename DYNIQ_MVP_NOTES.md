# Dyniq App MVP

Test user:
- Email: demo@dyniq.ai
- Password: dyniq123

What was changed:
- Added localStorage demo authentication in `src/lib/auth.ts`.
- Protected app routes with `RequireAuth` in `src/router/routesPaths.tsx`.
- Updated `/login` for Dyniq MVP branding and demo credentials.
- Reworked `/dashboard` for Dyniq cleaning device metrics, pilot sites, AI recommendations and mock telemetry.
- Reworked sidebar/header labels for Dyniq.
- Reworked `/content-tools` into a simple device fleet page.

Run locally:
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
```

Next backend step:
- Replace mock data with API calls to `api.dyniq.ai`.
- Add real auth later with JWT/session cookies.
- Suggested first endpoints: `/auth/login`, `/devices`, `/devices/:id/telemetry`, `/scans`, `/alerts`.
