# CLAUDE.md — Englewood sites monorepo

Guidance for Claude Code when working in this repo. Keep it accurate when the workflow changes.

## What this is

Two marketing sites for sister businesses in Englewood, FL, as Bun workspaces:

- `parasailing/` — englewoodparasailing.com. A faithful React port of the original WordPress site (SKT "Extreme Sports" theme + Elementor). Every page, section, integration and the verbatim copy of the old site is reproduced here; `assets-raw/old-site-text/ep-inventory.md` is the section-by-section inventory it was built from.
- `rentalboats/` — englewoodrentalboats.com. A faithful React port of the original WordPress site (OceanWP + Elementor): every page, section, integration and the verbatim copy of the live site, built from `assets-raw/old-site-text/rb-inventory.md`.

Stack for both: React 19 + Vite 8 + Tailwind CSS 4 + React Router 7 + lucide-react. Plain JSX, no TypeScript, no state library, no tests, no backend. Static `dist/` output for Apache/cPanel hosting with `public/.htaccess`.

Per site: `src/App.jsx` is the router shell (`BrowserRouter`, `ScrollManager`, chrome around `<Routes>`); `src/pages/*` are routes; `src/components/*` are shared pieces; `src/components/home/*` are the home-page sections (in page order: `Hero`, `Welcome`, `GalleryTeaser`, `ReviewsBand`, `About`, `AdventureCta` and `TimeToFly`); `src/data/*.js` holds every business fact, list and integration ID; `src/hooks/usePageMeta.js` sets title/description/canonical per page.

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

**Theming.** Colors and fonts are Tailwind 4 `@theme` tokens at the top of each site's `src/index.css` (`--color-navy`, `--color-sky`, `--font-display`, …). Use them as normal utilities (`bg-navy`, `text-sky`, `font-display`). Both sites are light-only — no theme toggle, no `data-theme` blocks. Parasailing reproduces the old theme: Poppins 17px body (`body` colour), Teko display headings (`kicker` 37px/500 black, `display-blue` 80px bold `royal`, white Teko hero headings), Roboto (`font-el`) for Elementor text-editor copy and the Roboto buttons, Kaushan Script (`font-script`) only for "Our Reviews". Colours are the old site's: `navy` header/top bar, `royal` headings, `band` blue band, `card` pricing headers, `red`/`red-link`/`book`/`price-btn` reds, `yellow` active nav, `orange` hover/mobile menu strip, `panel` mobile menu, `light` section bands, `muted` text-editor grey, `dropdown` menu bg. No heading `text-transform`. Exact pixel values from the inventory are written as Tailwind arbitrary values (`pt-[260px]`); `md` = 768 (Elementor 767) and `lg` = 1024 are the only breakpoints used. Fixed-attachment backgrounds only at `lg:bg-fixed`. Element defaults in `index.css` live in `@layer base` so utilities can override them. Never hardcode a hex that has a token.

**Shared utilities.** Parasailing: `container-x` (1200px + 15px gutters), `kicker`, `display-blue`, `btn` + `btn-royal` / `btn-red` / `btn-xl` (Teko buttons; `btn-xl` is the Roboto Elementor preset), `input`. Rentalboats: `container-x` (1140px + 15px gutters), `btn` + `btn-xl` / `btn-red` (Lato Elementor buttons; other button colours are one-off arbitrary values), and the `animate-zoom-in` / `animate-slide-in-left` / `animate-bounce-in` entrance animations that `Reveal.jsx` plays on scroll. All are `@utility` blocks in `src/index.css`. Reuse them; add new shared utilities there, not as ad-hoc class strings. **Always wrap button content in a `<span>`** — `btn > span` is the inline-flex row that lays out an icon next to the label.

**Content is data.** Phone, address, hours, socials, FareHarbor URLs, Elfsight IDs, cancellation policy → `src/data/site.js`. Flights and extras → `pricing.js`. Reviews → `reviews.js`. Gallery → `gallery.js`. Nav → `nav.js`. Rentalboats: boat cards and galleries → `boats.js`, FAQ → `faq.js`, testimonials → `reviews.js`, nav → `nav.js`. Short lists used once stay inline in the component. Copy changes are data edits; do not restructure JSX for a text change.

**Routing.** Internal navigation uses `Link` / `NavLink` from react-router-dom, never a plain `<a>`. Section anchors are written `/#contact` so they work from any page. External links, `tel:` and FareHarbor use `<a>`. Every page calls `usePageMeta`.

**Icons.** `lucide-react`, imported by name, `size` prop. Lucide has no brand icons, so Facebook/Instagram are hand-rolled in `parasailing/src/components/SocialIcons.jsx`.

**Component structure.** Each visual block of a section is its own named, exported function, and the default export is a thin composer that wraps them in `<section id className="container-x …">` (or, for a full-bleed band, `<section className="bg-… section-pad"><div className="container-x">`). Pages import only the default export. `parasailing/src/components/home/Welcome.jsx` and `pages/Parasailing.jsx` are the reference layouts; inner pages open with `components/PageHero.jsx` (hero pulled up under the transparent menu bar, `parasail-wave` edge, centred `display-blue` heading).

**Tailwind class style.** Prefer a native utility over an arbitrary value when one exists. Negative arbitrary values go inside the brackets (`top-[-120px]`). Inline `style={{}}` only for values computed from data.

**Images.** Everything shipped lives in `<site>/public/images/<group>/` as `.webp` (photos ≤ 1600px wide, logos ≤ 600px, icons ≤ 160px). Parasailing groups: `brand/`, `theme/` (sound button and the three wave edges), `bg/` (section backgrounds), `home/`, `about/` (the five blue badge icons), `parasailing/`, `pics/` + `pics/thumbs/` (the 16-image gallery in live order). Raw originals go in `assets-raw/` (gitignored); `assets-raw/convert.py` converts with Pillow. Do not commit PNG/JPG. Both home heroes loop `<site>/public/video/hero.mp4` (muted 720p transcodes of the old sites' Elementor background videos; the parasailing source is `assets-raw/ep/video/englewood.mp4`, the rentalboats source `assets-raw/rb/video/englewood-2.mp4`, ffmpeg command in `assets-raw/convert.py`). The parasailing "Play With Music On" sound button (`SoundButton.jsx`) plays `parasailing/public/video/englewood.mp4` (720p with audio) in `Lightbox.jsx`; the Parasailing page hero and embeds use YouTube (`YOUTUBE` in `site.js`, `YouTubeBackground.jsx`).

**Formatting.** Tabs in JSX, two spaces in CSS/JSON. Keep diffs limited to the lines you intend to change.

**Dependencies.** Do not add a dependency without asking. Runtime deps per site: react, react-dom, react-router-dom, lucide-react.

## Integrations (parasailing) — carried over from the old site, do not drop

All script tags are in `parasailing/index.html`; IDs/URLs are in `src/data/site.js`.

- **FareHarbor** is the real booking system (company slug `englewoodparasailing`). `BookButton.jsx` links to the book URL; the autolightframe script turns that into an in-page lightbox. The home page (`TimeToFly.jsx`) and the Parasailing page embed the availability calendar iframe (`FareHarborCalendar.jsx`).
- **"Book Now" float.** The old site's Buttonizer button is `BookNowFloat.jsx` (fixed top-right on desktop, right edge at 30% on mobile) linking to FareHarbor.
- **SmartWaiver** floating "Sign our waiver" button (waiver `splashpage-22965`). It renders bottom-left with the old site's styling; nothing in our CSS touches it.
- **Elfsight** widgets: reviews (`/reviews`), weather (footer), Instagram (`/social`). `ElfsightWidget.jsx` mounts them by ID and re-inits after client-side navigation. The Elfsight account may belong to the previous agency — confirm ownership before launch.
- **Google Ads** conversion tag `AW-726532171` (no GA4/GTM existed on the old site).
- **Google Map** in the footer "Map & Directions" column and on `/contact` is a keyless `output=embed` iframe (`MAP_EMBED`; the old site's API-key map was broken).
- **Facebook Page Plugin** iframe on `/social` (`FACEBOOK_PLUGIN`) replaces the old "facebook feed here" placeholder.
- The contact form (`ContactForm.jsx` on `/contact`) POSTs to `VITE_LEAD_ENDPOINT` and runs in demo mode when it's unset.

## Integrations (rentalboats) — carried over from the live site, do not drop

Script tags are in `rentalboats/index.html`; IDs/URLs are in `src/data/site.js`.

- **Booking is split across two systems, exactly as live.** The first three boat cards on `/boats` (Sun Catcher, Aloha, Scout) link image + title to **BookingCentral** (`bookingCentral(productId)`); every "Book Now" / "Click here to Book Now!" link and cards 4–5 (Bayliner, Skiff) go to **FareHarbor** (`FAREHARBOR.book`, company `englewoodrentalboats`, flow `1159754`), which the autolightframe script opens in-page. The home-page "Book Now!" buttons go to `/boats`.
- **Elfsight** weather widget in the shared `GetInTouch.jsx` band (`ELFSIGHT.weather`), mounted by `ElfsightWidget.jsx`.
- **YouTube** `YOUTUBE.touch` is the muted Get In Touch background (`YouTubeBackground.jsx`, poster `bg/get-in-touch.webp` on mobile). The home hero plays the local `video/hero.mp4` instead of the live YouTube embed; `SoundButton.jsx` opens `video/englewood-2.mp4` with audio.
- **Google Map** on `/contact` is the live keyless `output=embed` iframe (`MAP_EMBED`).
- Social icons in `TopBar.jsx` render only when `SOCIALS.facebook` / `SOCIALS.instagram` are set (both `null`: the live links are `#` placeholders). No analytics existed on the live site.

## Business facts baked into the sites

**Parasailing:** phone 833-359-1200 / 833-FLY-1200 (`tel:8333591200`); 1450 Beach Road, Englewood, FL 34223; daily 8:00 am – 5:30 pm; reservations required Sept–Jan; ages 5–105; Standard $89 (1,000 ft, ~9 min), Big Air / Deluxe $99 (1,200 ft, ~14 min); observers $35 stand-by / $50 guaranteed; photo pack $40; up to 3 fly together; 2023 Ocean Pro boat seats 12; cancellation 24 h or full price. Facebook `facebook.com/pages/Englewood-Parasailing-Tours/1641315582832147`, Instagram `@englewoodparasailingtours`.

**Rentalboats:** phone 941-475-0733 (plain text, not a `tel:` link, as live); 1450 Beach Rd. Englewood, FL 34223; "7 Days : 8AM to 6PM" / "Weather Permitting"; five boats with 4/6/8-hour rates (Sun Catcher 90hp $285/$375/$435, Aloha 90hp $285/$375/$435, Scout 150hp $299/$399/$450, Bayliner deck boat $285/$375/$435, Key West skiff 50hp $199/$250/$299) plus a 15% automatic gratuity; renters must be 27+, boater-safety course if born after 1 Jan 1988; 24 h cancellation. All content mirrors the live site verbatim, including the stock-looking testimonials, the placeholder social links, the Bayliner "175hp" title vs "250hp" bullet and the © 2024 footer; only three typos were fixed ("Parasailing", "Snorkeling", "8AM to").

If a fact changes, edit `src/data/site.js` (or the relevant data file) — it is not repeated in JSX.

## Old → new URLs (parasailing)

`public/.htaccess` 301s the WordPress paths: `/englewood-parasailing-adventures-florida-fl/` → `/parasailing`, `/parasail-englewood-fl-pricing/` → `/pricing`, `/englewood-parasailing-reviews/` and `/?page_id=523` → `/reviews`, `/parasailing-pics-englewood-fl/` → `/pics`, `/englewood-fl-parasailing-social-media/` → `/social`. `/contact/` is a real route now (`pages/Contact.jsx`; the nav "Contact" item still points at the footer `/#contact` column, as on the old site). Keep these when editing the file.

## Old → new URLs (rentalboats)

`rentalboats/public/.htaccess` 301s the WordPress paths: `/boat-rental-englewood-fl/` → `/boats`, `/aloha-pontoon-rental-boats-englewood-fl/` → `/galleries/aloha`, `/pontoon-rental-englewood-fl/` → `/galleries/sun-catcher`, `/scout-center-console-gallery/` → `/galleries/scout`. Keep these when editing the file.
