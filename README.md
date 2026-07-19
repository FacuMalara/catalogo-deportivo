# SportCatalog — Catálogo Deportivo

Catálogo público de productos deportivos construido con Next.js, Prisma, MongoDB Atlas, Tailwind CSS v4 y HeroUI.

## Stack

- **Next.js 16** (App Router)
- **Prisma 6** + **MongoDB Atlas**
- **Tailwind CSS v4** + **HeroUI v3**
- **Vercel** (deploy)

## Requisitos

- Node.js 20+
- Cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Cuenta en [Vercel](https://vercel.com) (para deploy)

## Configuración local

1. Cloná el repo e instalá dependencias:

```bash
npm install
```

2. Copiá `.env.example` a `.env.local` y completá tu connection string:

```bash
cp .env.example .env.local
```

También creá un archivo `.env` con la misma `DATABASE_URL` (Prisma CLI lo usa para `db push` y `seed`).

3. En MongoDB Atlas verificá:

- **Database Access**: usuario con contraseña creado
- **Network Access**: IP Access List con `0.0.0.0/0`

4. Sincronizá el schema y cargá los datos de ejemplo:

```bash
npm run db:push
npm run db:seed
```

5. Iniciá el servidor de desarrollo:

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Subí el proyecto a GitHub.
2. Importá el repo en [Vercel](https://vercel.com/new).
3. Agregá la variable de entorno `DATABASE_URL` (Production + Preview).
4. Deploy (build command: `prisma generate && next build`).
5. Post-deploy, desde tu máquina con la `DATABASE_URL` de producción:

```bash
npm run db:push
npm run db:seed
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run db:push` | Sincroniza schema con MongoDB |
| `npm run db:seed` | Carga categorías y productos de ejemplo |

## Estructura

```
src/
├── app/
│   ├── page.tsx                 # Catálogo principal
│   └── productos/[slug]/page.tsx # Detalle de producto
├── components/
│   ├── Navbar.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── CatalogFilters.tsx
└── lib/
    ├── prisma.ts
    └── format.ts
```

## Solución de problemas

### `bad auth : authentication failed`

- Verificá usuario y contraseña en **Database Access** de Atlas.
- Si cambiaste la contraseña, actualizá `.env` y `.env.local`.
- Si la contraseña tiene caracteres especiales (`@`, `#`, `%`), encodealos en la URL (`@` → `%40`).

### Prisma Client no generado en Vercel

El `postinstall` y el script `build` ya ejecutan `prisma generate`.
