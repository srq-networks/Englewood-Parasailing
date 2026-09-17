# Englewood sites

Monorepo for two sister businesses that share a dock at 1450 Beach Road, Englewood, FL:

| Folder | Site | Status |
| --- | --- | --- |
| `parasailing/` | englewoodparasailing.com | Full rebuild of the previous WordPress site (all pages, FareHarbor booking, reviews, waiver, weather/Instagram widgets) |
| `rentalboats/` | englewoodrentalboats.com | Home page from the design mock; more pages to come |

Both are React 19 + Vite 8 + Tailwind CSS 4 + React Router 7, plain JSX, no backend. They build to static files that deploy to any Apache/cPanel host (the `public/.htaccess` in each site handles the SPA rewrite and, for parasailing, the 301s from the old WordPress URLs).

## Commands

Bun workspaces — one install at the root covers both sites.

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Dev server (parasailing) | `bun run dev:parasailing` |
| Dev server (rentalboats) | `bun run dev:rentalboats` |
| Lint everything | `bun run lint` |
| Build both | `bun run build` → `parasailing/dist`, `rentalboats/dist` |
| Build one | `cd parasailing && bun run build` |

## Environment

Each site reads optional Vite env vars (put them in `parasailing/.env` or `rentalboats/.env`, gitignored):

| Var | Site | Purpose |
| --- | --- | --- |
| `VITE_LEAD_ENDPOINT` | both | URL the request form POSTs JSON to. Empty = demo mode (form shows success without sending). |
| `VITE_RENTALS_URL` | parasailing | Where "Boat rentals" links go. Defaults to englewoodrentalboats.com. |
| `VITE_PARASAIL_URL` | rentalboats | Where "Parasailing" links go. Defaults to englewoodparasailing.com. |

## Deploy

Upload the contents of `<site>/dist/` to the web root of the host for that domain. `.htaccess` is copied into `dist/` by the build.

## Images

Shipped images live in `<site>/public/images/` as `.webp`. Raw originals (downloaded from the previous sites) live in `assets-raw/`, which is gitignored; `assets-raw/convert.py` regenerates the webp files and favicons with Pillow.
