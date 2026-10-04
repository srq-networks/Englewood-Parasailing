# Englewood sites

Monorepo for two sister businesses that share a dock at 1450 Beach Road, Englewood, FL:

| Folder | Site | Status |
| --- | --- | --- |
| `parasailing/` | englewoodparasailing.com | Direct port of the live WordPress site: all 7 pages, FareHarbor booking, reviews, waiver, weather/Instagram widgets |
| `rentalboats/` | englewoodrentalboats.com | Direct port of the live WordPress site: all 7 pages, FareHarbor + BookingCentral booking, galleries, FAQ, weather widget |

The client asked for the original sites for now, so the `original` branch holds faithful React ports of both live sites (same sections, copy, fonts, colours, images and integrations). The v2 redesign stays on `main`.

Both are React 19 + Vite 8 + Tailwind CSS 4 + React Router 7, plain JSX, no backend. They build to static files that deploy to any Apache/cPanel host (the `public/.htaccess` in each site handles the SPA rewrite and the 301s from the old WordPress URLs).

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
| `VITE_LEAD_ENDPOINT` | parasailing | URL the `/contact` form POSTs JSON to. Empty = demo mode (form shows success without sending). |
| `VITE_RENTALS_URL` | parasailing | Where "Boat rentals" links go. Defaults to englewoodrentalboats.com. |
| `VITE_PARASAIL_URL` | rentalboats | Where "Parasailing" links go. Defaults to englewoodparasailing.com. |

## Deploy

Upload the contents of `<site>/dist/` to the web root of the host for that domain. `.htaccess` is copied into `dist/` by the build.

## Images

Shipped images live in `<site>/public/images/` as `.webp`. Raw originals live in `assets-raw/`, which is gitignored: `assets-raw/fetch.sh` downloads them from the live sites, and `python3 assets-raw/convert.py original` regenerates the webp files and favicons with Pillow (`convert.py v2` rebuilds the `main` branch's set). The ffmpeg commands for the videos are in comments at the top of `convert.py`. `assets-raw/old-site-text/{ep,rb}-inventory.md` record every section of the live sites the ports were built from.

## Differences from the live sites

The ports are verbatim except for these deliberate changes:

**Parasailing**
- `/contact` keeps the theme's demo layout but shows the real address, phones, hours and map. There is no known business email, so the email card is a "Book Online" (FareHarbor) card. The demo partner logos are gone, and the form runs in demo mode until `VITE_LEAD_ENDPOINT` is set. The nav "Contact" item still scrolls to the footer, as live.
- `/social`: the "facebook feed here" placeholder is now the Facebook Page Plugin. It may render blank on localhost; check it on the real domain.
- Footer map is a working keyless embed (the live map plugin errors). The dead Twitter and YouTube icons are removed.
- The "Book Now" button was injected by Buttonizer on the agency's account; it is now part of the site (`BookNowFloat.jsx`), styled the same.

**Rental boats**
- The home hero plays the local copy of the branded video instead of the YouTube embed, so no YouTube controls show on phones.
- Social icons are hidden because the live links point to `#`. They appear once real URLs are set in `rentalboats/src/data/site.js` (`SOCIALS`).
- No loading screen and no header search.

**Both:** typos fixed: "Parsailing", "Afforadble", "Parasiling", "Snorkling", "8AMto". Everything else is word for word, including the counters ($99 → 89, 15 → 28+), the footer TAGS text and the copyright years.

## Before launch

- **Rental boats testimonials** look like stock placeholders. Get real reviews or confirm with the client.
- **Rental boats social links** are missing (see above).
- **Bayliner deck boat** is titled 175hp but listed as 250hp on the live site. Confirm which is right.
- **Elfsight:** the widgets may be on the previous agency's account, and the rental boats weather widget is set to Venice. Confirm ownership and location.
- **Facebook Page Plugin** on `/social`: check it renders on the real domain.
