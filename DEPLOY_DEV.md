# Dyniq App MVP - dev deployment

## Demo login

Email: `demo@dyniq.ai`  
Password: `dyniq123`

## Install

```bash
cd /home/dyniq.io/app
npm install
```

## Run in dev mode with PM2

```bash
pm2 delete dyniq-app 2>/dev/null || true
pm2 start npm --name dyniq-app -- run dev -- --host 0.0.0.0 --port 5173
pm2 save
pm2 list
```

## Test locally on server

```bash
curl http://127.0.0.1:5173/login
```

## OpenLiteSpeed / CyberPanel proxy

External App:

- Type: Web Server
- Name: dyniq-app
- Address: 127.0.0.1:5173

Virtual Host `app.dyniq.io` -> Context:

- Type: Proxy
- URI: `/`
- Web Server: dyniq-app

Then click **Graceful Restart** in OpenLiteSpeed WebAdmin.

## Vite config

`vite.config.ts` already includes:

- alias `@ -> ./src`
- host `0.0.0.0`
- port `5173`
- allowed host `app.dyniq.io`
