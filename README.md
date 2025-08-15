
# Info Trafic Lorraine & Frontières — Monorepo (MVP)

Stack: **Next.js 14 (App Router)** + **NestJS** + **PostgreSQL (with PostGIS later)** + **Redis** + **Docker Compose**.

## Démarrage (développement)

1) Installer Node.js >= 20 et Docker.
2) Depuis la racine du repo :

```bash
npm i
docker compose -f infra/docker-compose.yml up -d
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:4000 (health: `/v1/health`)
- Redis: localhost:6379
- Postgres: localhost:5432 (db: `infotrafic`, user: `infotrafic`, pass: `infotrafic`)

## Scripts utiles

- `npm run dev` : lance web + api en parallèle
- `npm run build` : build des deux apps
- `npm run lint` : lint
- `npm run format` : format

## Structure

```
info-trafic/
├─ apps/
│  ├─ web/      # Next.js 14 + Tailwind + MapLibre
│  └─ api/      # NestJS (REST + WebSocket)
├─ packages/
│  └─ config/   # config partagée (eslint, tsconfig, prettier)
└─ infra/       # docker compose, nginx (optionnel plus tard)
```

## Étapes suivantes
- Ajouter PostGIS et un ORM (TypeORM/Prisma) + schéma de base (incidents, segments).
- Ajouter WebSocket namespaces (traffic:update, incident:new).
- Brancher MapLibre à un flux GeoJSON (mock) + pins incidents.
- Mettre en place l’auth (NextAuth ou custom) et le back-office (shadcn/ui).

