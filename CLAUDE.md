# CLAUDE.md — Englewood sites monorepo

Guidance for Claude Code when working in this repo. Keep it accurate when the workflow changes.

## What this is

Two marketing sites for sister businesses in Englewood, FL, as Bun workspaces:

- `parasailing/` — englewoodparasailing.com. Replaces a WordPress/Elementor site built by a previous agency. Every page and integration from the old site is reproduced here.
- `rentalboats/` — englewoodrentalboats.com. Home page only so far, ported from the design mock.

Stack for both: React 19 + Vite 8 + Tailwind CSS 4 + React Router 7 + lucide-react. Plain JSX, no TypeScript, no state library, no tests, no backend. Static `dist/` output for Apache/cPanel hosting with `public/.htaccess`.

Per site: `src/App.jsx` is the router shell (`BrowserRouter`, `ScrollManager`, chrome around `<Routes>`); `src/pages/*` are routes; `src/components/*` are shared pieces; `src/components/home/*` are the home-page sections (in page order: `Hero`, `TrustBar`, `Thrills`, `PricingSection`, `Availability`, `GalleryTeaser`, `ReviewsBand`, `BigCta` — the rental-boats cross-sell — and `Contact`); `src/data/*.js` holds every business fact, list and integration ID; `src/hooks/usePageMeta.js` sets title/description/canonical per page.

## Commands

Bun only (`bun.lock` at the root). Run from the repo root.

| Task | Command |
| --- | --- |
| Install | `bun install` |
| Dev server | `bun run dev:parasailing` / `bun run dev:rentalboats` |
| Lint | `bun run lint` |
| Build | `bun run build` (both) or `cd <site> && bun run build` |

The developer usually already has the dev server running and is viewing the page. Do not start a second one.

## Commit rules

- **Ask before committing.** Make the changes, verify them, then ask before running `git commit`. Never commit or push on your own initiative.
- Do **not** add `Co-Authored-By: Claude` or "Generated with Claude Code" lines. Commits carry the developer's identity only.
- One logical change per commit. Short imperative subject line, no trailing period.
- Run lint and build before committing. Both must pass clean.
- Do not commit `dist/`, `dist.zip`, `node_modules/` or `assets-raw/` (gitignored).

## Code conventions

**Theming.** Colors and fonts are Tailwind 4 `@theme` tokens at the top of each site's `src/index.css` (`--color-navy`, `--color-sky`, `--font-display`, …). Use them as normal utilities (`bg-navy`, `text-sky`, `font-display`). Both sites are light-only — no theme toggle, no `data-theme` blocks. Parasailing is a white/`canvas` page with `navy` and `sky` bands, `yellow`/`coral` CTAs, Barlow Condensed headings (always uppercase, weight 800) and Rubik body. Element defaults in `index.css` live in `@layer base` so utilities can override them. Never hardcode a hex that has a token.

**Shared utilities.** `container-x`, `section-pad`, `eyebrow`, `display`, `btn` + `btn-primary` / `btn-secondary` / `btn-coral` / `btn-light` (parasailing; `btn-light` is the outline button for photos and dark bands) or `btn-ghost` (rentalboats), `btn-sm`, `card`, `chip`, `input`, `label`, `photo` / `washed` are `@utility` blocks in `src/index.css`. Reuse them; add new shared utilities there, not as ad-hoc class strings. **Always wrap button content in a `<span>`** — `btn > span` is the inline-flex row that lays out an icon next to the label.

**Content is data.** Phone, address, hours, socials, FareHarbor URLs, Elfsight IDs, cancellation policy → `src/data/site.js`. Flights and extras → `pricing.js`. Reviews → `reviews.js`. Gallery → `gallery.js`. Nav → `nav.js`. Boats/FAQ (rentalboats) → `boats.js` / `faq.js`. Short lists used once stay inline in the component. Copy changes are data edits; do not restructure JSX for a text change.

**Routing.** Internal navigation uses `Link` / `NavLink` from react-router-dom, never a plain `<a>`. Section anchors are written `/#contact` so they work from any page. External links, `tel:` and FareHarbor use `<a>`. Every page calls `usePageMeta`.

**Icons.** `lucide-react`, imported by name, `size` prop. Lucide has no brand icons, so Facebook/Instagram are hand-rolled in `parasailing/src/components/SocialIcons.jsx`.

**Component structure.** Each visual block of a section is its own named, exported function, and the default export is a thin composer that wraps them in `<section id className="container-x …">` (or, for a full-bleed band, `<section className="bg-… section-pad"><div className="container-x">`). Pages import only the default export. `parasailing/src/components/home/Thrills.jsx` and `pages/Parasailing.jsx` are the reference layouts.

**Tailwind class style.** Prefer a native utility over an arbitrary value when one exists. Negative arbitrary values go inside the brackets (`top-[-120px]`). Inline `style={{}}` only for values computed from data.

**Images.** Everything shipped lives in `<site>/public/images/<group>/` as `.webp` (photos ≤ 1600px wide, logos ≤ 600px, icons ≤ 160px). Raw originals go in `assets-raw/` (gitignored); `assets-raw/convert.py` converts with Pillow. Do not commit PNG/JPG. The hero video is `parasailing/public/video/englewood.mp4` (720p transcode of the original).

**Formatting.** Tabs in JSX, two spaces in CSS/JSON. Keep diffs limited to the lines you intend to change.

**Dependencies.** Do not add a dependency without asking. Runtime deps per site: react, react-dom, react-router-dom, lucide-react.

## Integrations (parasailing) — carried over from the old site, do not drop

All script tags are in `parasailing/index.html`; IDs/URLs are in `src/data/site.js`.

- **FareHarbor** is the real booking system (company slug `englewoodparasailing`). `BookButton.jsx` links to the book URL; the autolightframe script turns that into an in-page lightbox. The home page also embeds the availability calendar iframe (`Availability.jsx`).
- **SmartWaiver** floating "Sign our waiver" button (waiver `splashpage-22965`). `index.css` lifts `#smartwaiver_floater` above the mobile sticky bar.
- **Elfsight** widgets: reviews (`/reviews`), weather (footer), Instagram (`/social`). `ElfsightWidget.jsx` mounts them by ID and re-inits after client-side navigation. The Elfsight account may belong to the previous agency — confirm ownership before launch.
- **Google Ads** conversion tag `AW-726532171` (no GA4/GTM existed on the old site).
- **Google Map** in the footer is a keyless `output=embed` iframe (the old site's API-key map was broken).
- The request forms on both sites POST to `VITE_LEAD_ENDPOINT` and run in demo mode when it's unset.

## Business facts baked into the sites

**Parasailing:** phone 833-359-1200 / 833-FLY-1200 (`tel:8333591200`); 1450 Beach Road, Englewood, FL 34223; daily 8:00 am – 5:30 pm; reservations required Sept–Jan; ages 5–105; Standard $89 (1,000 ft, ~9 min), Big Air / Deluxe $99 (1,200 ft, ~14 min); observers $35 stand-by / $50 guaranteed; photo pack $40; up to 3 fly together; 2023 Ocean Pro boat seats 12; cancellation 24 h or full price. Facebook `facebook.com/pages/Englewood-Parasailing-Tours/1641315582832147`, Instagram `@englewoodparasailingtours`.

**Rentalboats:** phone 941-475-0733; same address; hours "7 days · 8 am – 6 pm". **The fleet names, hours, FAQ answers and "no license needed" claim come from the design mock, not the live site — verify against englewoodrentalboats.com before this site goes to the client.**

If a fact changes, edit `src/data/site.js` (or the relevant data file) — it is not repeated in JSX.

## Old → new URLs (parasailing)

`public/.htaccess` 301s the WordPress paths: `/englewood-parasailing-adventures-florida-fl/` → `/parasailing`, `/parasail-englewood-fl-pricing/` → `/pricing`, `/englewood-parasailing-reviews/` and `/?page_id=523` → `/reviews`, `/parasailing-pics-englewood-fl/` → `/pics`, `/englewood-fl-parasailing-social-media/` → `/social`, `/contact/` → `/#contact`. Keep these when editing the file.
