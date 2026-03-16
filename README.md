# Alpargata Hivern Web App

Frontend moderno para un torneo de baloncesto construido con Next.js + TypeScript. Incluye navegacion completa y estructura preparada para integrar Prisma con PostgreSQL en Neon.

## Stack

- Next.js (App Router)
- TypeScript
- Prisma
- PostgreSQL (Neon)

## Paginas incluidas

- Inicio
- Calendario
- Partidos
- Clasificaciones
- Estadisticas
- Equipos
- Jugadores
- Reglamento

## Arranque local

1. Instala dependencias:

```bash
npm install
```

2. Crea variables de entorno:

```bash
copy .env.example .env
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Preparado para Neon + Prisma

- Modelo de datos base en `prisma/schema.prisma`
- Cliente Prisma reutilizable en `lib/prisma.ts`
- Variables de conexion listas en `.env.example`
- Seed inicial en `prisma/seed.js` con:
  - 4 equipos
  - 8 jugadores por equipo (32 jugadores en total)
  - partidos de liga

Cuando quieras integrar datos reales:

```bash
npm run prisma:generate
npm run db:push
npm run db:seed
```
