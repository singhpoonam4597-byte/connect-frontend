# Connect — Frontend

React + Vite messaging client for **Connect**.

## Structure

```
src/
  App.jsx
  main.jsx
  pages/          Chat, Settings, Search, AI, User profile
  components/     Loader, brand mark
  stores/         auth, socket
  utils/          api, i18n
  styles/         globals.css (liquid UI)
```

## Setup

```bash
npm install
cp .env.example .env   # set VITE_API_URL
npm run dev
```

## Env

- `VITE_API_URL` — backend base URL (no trailing `/api`)

## Notes

- Liquid glass UI (dock, AI, search)
- Realtime via socket.io
- Deploy: Vercel
