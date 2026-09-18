# Copy review — text on the new sites that was not on the old ones

Generated 2026-09-18 by diffing every user-visible string in `parasailing/src` and `rentalboats/src`
against a fresh scrape of the live WordPress sites (saved, gitignored, in `assets-raw/old-site-text/`).

Status key: **New** = not on the old site in any form. **Reworded** = same idea as the old site, different
wording (old wording in brackets). Strings that are verbatim from the old site, business facts (phone,
address, prices that match), review quotes, and generic UI chrome (Close / Previous / Next) are omitted.

This file is untracked. Delete it when the review is done.

---

## 1. Watch list

### 1a. "Gulf" / "Gulf of Mexico" — 15 mentions, none on the old sites

The old parasailing site never says "Gulf". It says "the crystal clear waters off of Englewood",
"the tranquil waters of Manasota Key", "Englewood Beach, Boca Grande and Manasota Key", "the Intracoastal Waterway".

| Where | Text |
| --- | --- |
| `parasailing/src/components/home/Hero.jsx:44` | **H1:** Soar 1,200 feet above the **Gulf of Mexico**. |
| `parasailing/src/pages/Home.jsx:15` | **Browser title:** Englewood Parasailing — Soar 1,200 ft Above the **Gulf** \| Englewood, FL |
| `parasailing/src/pages/Home.jsx:17` | **Meta description:** Parasail 1,200 ft over the **Gulf of Mexico** in Englewood, Florida … |
| `parasailing/src/pages/Pics.jsx:13` | Views from 1,200 feet over Englewood, Manasota Key and the **Gulf**. |
| `parasailing/src/components/home/GalleryTeaser.jsx:16` | Englewood Beach, Manasota Key and the open **Gulf**, seen the way only our riders see them. |
| `parasailing/src/components/home/GalleryTeaser.jsx:4` | alt: Parasail canopy over the **Gulf** |
| `parasailing/src/components/home/GalleryTeaser.jsx:6` | alt: Englewood Beach and the **Gulf** from the parasail |
| `parasailing/src/components/home/Thrills.jsx:20` | From the top of the line the **Gulf** turns to glass and you can see straight through it. … |
| `parasailing/src/components/home/Thrills.jsx:22` | alt: Two riders parasailing high over the turquoise **Gulf** off Englewood Beach |
| `parasailing/src/components/home/Thrills.jsx:29` | … Kevlar towlines for the smoothest flight on the **Gulf Coast**. |
| `parasailing/src/components/home/Thrills.jsx:40` | alt: Three friends waving from the parasail high above the **Gulf** |
| `parasailing/src/data/gallery.js:3` | alt: Parasail canopy over the **Gulf of Mexico** |
| `parasailing/src/data/gallery.js:10` | alt: Parasailers high above the **Gulf** |
| `rentalboats/src/components/home/ParasailPromo.jsx:9` | Fly over the **Gulf** in the morning, then step right onto your rental pontoon … |
| `rentalboats/src/components/home/UseItFor.jsx:5-6` | … along virgin **Gulf** beaches. / tile title **Gulf** & Bay Fishing |
| `rentalboats/src/data/boats.js:49` | Best for: Inshore Fishing & **Gulf** Exploration |

### 1b. New claims that contradict or go beyond the old sites

| Where | New text | Old site says |
| --- | --- | --- |
| `rentalboats/src/components/home/Hero.jsx:40`, `TrustBar.jsx:6`, `data/faq.js:6` | **No boating license required** / Anyone 25 or older with a valid driver's license can captain | FAQ: "To rent a boat you must be at least **27 years old**. If born after January 1, 1988 you must have taken a safety boaters course." |
| `rentalboats/src/components/home/TrustBar.jsx:9`, `data/faq.js:10`, `pages/Home.jsx:16` | **Fueled Up & Ready at the Dock** / "a full tank" / "fueled up and ready at the dock" | FAQ: "Is fuel included? **No, fuel cost is not included** in your rental." |
| `rentalboats/src/data/faq.js:18` | If we cancel for weather, you don't pay — we'll rebook or **refund**. | "There are no fees for cancellations due to bad weather. If the boat is available, another day, we would be more than happy to accommodate and reschedule." No refund wording. |
| `rentalboats/` (everywhere) | 24-hour cancellation policy is **absent** from the new site | FAQ: "Yes, 24 hours or the full amount of rental will be charged unless due to weather." |
| `rentalboats/src/data/boats.js:26,38` | Aloha 6 h **$375** / 8 h **$435**; Bayliner **$285 / $375 / $435** | Aloha lists only "$285 + tax for 4 hrs". Bayliner lists **no rates**. These were assumed. |
| `rentalboats/src/data/boats.js:7,19,31,43,57` | Boat lengths **22' / 20' / 20' / 19' / 17'** | No lengths on the old site. |
| `rentalboats/src/data/boats.js:34` | Bayliner **250hp** Yamaha 4-Stroke | Old site says both "with 175hp" and "250hp Yamaha Four Stroke" for this boat. |
| `rentalboats/src/data/boats.js:60-61` | Key West Skiff capacity **6**, "4 adults recommended" | No capacity listed for the skiff. |
| `rentalboats/src/components/home/TrustBar.jsx:8`, `data/faq.js:10` | GPS with **safe channels and sandbars pre-marked**, "best dolphin spots" | "Yes, GPS with a sonar/fishfinder." Nothing about pre-marked channels. |
| `rentalboats/src/components/home/Included.jsx:4` | **A quick dock briefing** — channel markers, the good sandbars, where the dolphins hang out | Not on the old site. |
| `rentalboats/src/components/home/TrustBar.jsx:10`, `data/faq.js:22` | **Dog-Friendly Fleet** / Can we bring the dog? Coolers? "Yes and yes." | Only evidence is an image alt "Dog friendly rental boats in englewood fl". Coolers not mentioned. |
| `rentalboats/src/data/reviews.js:3`, `components/home/Reviews.jsx:17-18,31` | **4.9 out of 5 Stars · Across 400+ Florida adventurers · Google reviews**; each quote labelled "Google review" | Old site shows six testimonials with no rating, count or platform. |
| `rentalboats/src/components/home/ParasailPromo.jsx:9` | Both businesses leave from our **private dock** | Not claimed on either old site. |
| `parasailing/src/components/home/Contact.jsx:33` | **Weather calls are ours — if we scrub, you don't pay.** | Only the 24 h cancellation policy exists on the old site. |
| `parasailing/src/data/pricing.js:16`, `components/PricingCards.jsx:24` | The $99 flight is called **Big Air** | Old site calls it **Deluxe Parasail** (Standard Flight is unchanged). |
| `parasailing/src/data/pricing.js:18,21-22` | **FAA maximum height — nobody flies higher** / Deluxe flight to the FAA maximum height | "1200 Foot Flights FAA Approved". "Maximum" and "nobody flies higher" are new. |
| `parasailing/src/components/home/TrustBar.jsx:7`, `Thrills.jsx:30`, `pages/Parasailing.jsx:11` | **USCG Master licensed** captains; "the area's only full-time, **year-round** crew" | "our captains are US Coast Guard certified". "Master" and "year-round" are new. |
| `parasailing/src/components/home/Thrills.jsx:29-30` | **hydraulic** winch, **12-passenger lounge** | "state of the art vessel", "Kevlar towline is reeled out from a winch", "Up to 12 people". |
| `parasailing/src/components/home/Thrills.jsx:12` | Toe dip: **Included with every flight** | Old pricing lists free fall/dip as "Optional" on both flights. Same idea, but "included" reads as a promise. |
| `parasailing/src/components/home/TrustBar.jsx:10` | **Wildlife sightings daily** | "perhaps spotting some of our resident dolphins and manatees". |
| `parasailing/src/components/home/Thrills.jsx:49`, `PricingSection.jsx:20`, `pages/Pricing.jsx:13` | The whole trip runs **about an hour dock to dock** | Not on the old site. |
| `parasailing/src/components/home/BigCta.jsx:12` | walk **20 feet** down the dock | Not on the old site. |
| `parasailing/src/data/site.js:9` (footer, top bar) | Hours **Daily 8:00 am – 5:30 pm** | The old parasailing site lists no hours anywhere. |
| `parasailing/src/components/home/Hero.jsx:59` | Flights from **$89** | Old home page says "Flights From Per Person $99" (its own pricing page has $89 Standard, so $89 is defensible). |
| `parasailing/src/data/reviews.js:2-10`, `pages/Reviews.jsx:71,84`, `components/home/ReviewsBand.jsx:26` | **1,255 reviews · 4.9 average · Tripadvisor 4.9 / Facebook 5.0 / Google 5.0**; "Over 1,200 **five-star** reviews"; "All 1,255 and counting" | Old site renders reviews via the Elfsight widget; these figures are not in the page HTML and cannot be verified from the scrape. |

### 1c. Old copy that was dropped (in case the client asks)

- Parasailing page intro: "The crystal clear waters off of Englewood will be the starting point for your aerial adventure, culminating in an unbelievable view high above the tranquil waters of Manasota Key. You will float effortlessly from our parasail canopy as you soar along with the gulls and frigates, peering down into the water, perhaps spotting some of our resident dolphins and manatees. From your lofty perch, you will be able to take in the fabulous view of Englewood Beach, Boca Grande and Manasota Key. The Intracoastal Waterway meanders throughout this backdrop, providing you with an unparalleled visual experience."
- Pics page: "Memories to last a lifetime are created on our boats!"
- Home page: "Parasailing is a great family activity and we can fly ages from 5 to 105 years old." (the ages survive as "Ages 5 to 105"), "Are You Ready For The Adventure Of a Lifetime?", "1200 Foot Flights FAA Approved".
- Rental boats: "Everybody Needs some Vitamin SEA in Their Life.", "What's Your Style? We have a boat for you to rent…", "Get out and enjoy the water on your terms", the "Use Our Boats For" list (Fishing, Shelling & Beach Excursions, Snorkling & Swimming, Sandbar Hopping, Cruising), "Multiple Booking Options" blurb, and seven FAQ entries (captain for hire, breakdowns, fuel, GPS, extending time, holidays, multi-day discount).

---

## 2. Parasailing — full list by page

### Head / SEO (`parasailing/index.html`, `usePageMeta` calls)

| Where | Text | Status |
| --- | --- | --- |
| `parasailing/index.html:11` | Parasail in Englewood, Florida with the area's original, most experienced and only full-time operator. Tandem and triple flights to 1,200 ft, ages 5 to 105. Call 833-359-1200. | Reworded [home intro paragraph] |
| `pages/Home.jsx:15` | Englewood Parasailing — Soar 1,200 ft Above the Gulf \| Englewood, FL | New |
| `pages/Home.jsx:17` | Parasail 1,200 ft over the Gulf of Mexico in Englewood, Florida with the area's original, only full-time parasail team. Single, tandem and triple flights, ages 5 to 105, dry deck takeoff and landing. Call 833-359-1200. | New |
| `pages/Parasailing.jsx:96-98` | Parasailing in Englewood, FL — Englewood Parasailing / How parasailing with Englewood Parasailing works: a 2023 Ocean Pro boat, USCG-certified captains, up to three riders together, optional free fall and dip. Book at 833-FLY-1200. | New |
| `pages/Pricing.jsx:56-58` | Pricing — Englewood Parasailing / Englewood parasailing prices: Standard flight $89 (1,000 ft, 9 min) and Big Air $99 (1,200 ft, 14 min). Observers $35–$50, photo package $40. Book online or call 833-FLY-1200. | New |
| `pages/Reviews.jsx:82-84` | Reviews — Englewood Parasailing / Over 1,200 five-star reviews on Tripadvisor, Facebook and Google. See what customers say about parasailing with Englewood Parasailing. | New |
| `pages/Pics.jsx:61-62` | Pics — Englewood Parasailing / Photos from parasailing flights over Englewood Beach and Manasota Key, Florida. Photo and video packages available for your flight. | New |
| `pages/Social.jsx:54-55` | Let's Get Social — Englewood Parasailing / Follow Englewood Parasailing on Facebook and Instagram and tag your flight photos with #englewoodparasailingtours. | New |
| `pages/NotFound.jsx:6` | Page not found — Englewood Parasailing / That page drifted off. Head back to Englewood Parasailing. | New |

### Top bar, nav, sticky bar (`components/TopBar.jsx`, `Navbar.jsx`, `StickyBar.jsx`, `BookButton.jsx`, `data/nav.js`)

| Where | Text | Status |
| --- | --- | --- |
| `TopBar.jsx:11` | Daily 8:00 am – 5:30 pm · Englewood's #1 rated parasail company | New (hours) + verbatim tagline |
| `data/nav.js:5,7` | Reviews / Social | Reworded [Our Reviews / Get Social] |
| `Navbar.jsx:34` | Boat rentals | Verbatim [Boat Rentals] |
| `BookButton.jsx:5` | Book your flight (default button label used in nav and elsewhere) | Reworded [BOOK NOW!] |
| `StickyBar.jsx:10,13` | Call (833) 359-1200 / Book flight | New UI |

### Home — Hero (`components/home/Hero.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:42` | Englewood's #1 rated water adventure · Ages 5 to 105 | Reworded ["Englewood's #1 rated parasail company", "ages from 5 to 105"] — "water adventure" is new |
| `:44` | Soar 1,200 feet above the Gulf of Mexico. | New |
| `:47` | Experience Englewood's ultimate view. Fly single, tandem or triple with the area's original and only full-time parasail team. Spot wild dolphins and sea turtles, feel the warm ocean breeze, and make the highlight memory of your vacation. | New (only "area's original … only full-time" is old) |
| `:48` | Zero experience needed. | Reworded [No Experience Required] |
| `:52` | Book your flight online | Reworded [BOOK NOW!] |
| `:59` | Flights from $89 · Reservations required Sept – Jan | Reworded [Flights From Per Person $99 / RESERVATIONS REQUIRED SEPT -JAN] |
| `:74-75` | Watch the flight / Sound on · 1:33 | New |
| `:78` | aria: Englewood Parasailing video | New |

### Home — Trust bar (`components/home/TrustBar.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:6` | 100% perfect safety record / 15+ years incident-free | Reworded [Perfect Safety Record / 15+ Year Safety Record] |
| `:7` | USCG Master licensed captains / The area's only full-time, year-round crew | Reworded + new ["US Coast Guard certified"; "ONLY Full-time operator"] |
| `:8` | Gentle deck takeoff & landing / Take off seated, land on your feet — completely dry | New |
| `:9` | Tandem & triple flights / Fly 2 or 3 side-by-side with family | Reworded ["You and up to two of your friends or family members can ride in the parasail together"] |
| `:10` | Wildlife sightings daily / Dolphins, turtles and rays from above | New |
| `:15` | aria: Why fly with Englewood Parasailing | New |

### Home — Thrills (`components/home/Thrills.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:47-49` | What everyone talks about / The moments you'll still be telling people about. / About an hour dock to dock, up to fourteen minutes at the top, and a few moments you'll want to remember on purpose. | New |
| `:9-10` | The famous toe dip / Want a little splash? Ask for the toe dip! | New |
| `:11` | At the end of your flight, the captain can slow the boat and let you gently float down until your toes skim the emerald water — then hit the throttle for an elevator ride back into the sky. Prefer to stay 100% bone dry? Just tell the captain before takeoff! | Reworded [free fall / "Elevator Ride" / "splash" copy] — "emerald water", "100% bone dry" are new |
| `:12` | Your call — dry or dipped / Included with every flight | New |
| `:13` | alt: Parasail canopy skimming down toward the water | New |
| `:18-19` | Aerial wildlife safari / Dolphins, sea turtles and rays — from 1,200 feet up. | New |
| `:20` | From the top of the line the Gulf turns to glass and you can see straight through it. Riders spot dolphins riding the boat's wake, sea turtles coming up for air, stingrays gliding over the sandbars and, in the cooler months, manatees in the pass. Keep looking down — the best show is below you. | New |
| `:21` | Dolphins / Sea turtles / Stingrays / Manatees | New (old mentions dolphins and manatees only) |
| `:22` | alt: Two riders parasailing high over the turquoise Gulf off Englewood Beach | New |
| `:27-28` | Your ride / The 2023 Ocean Pro — built for one thing. | New |
| `:29` | Custom-built in 2023 solely for passenger parasailing. Features a 12-passenger lounge, state-of-the-art hydraulic winch, and Kevlar towlines for the smoothest flight on the Gulf Coast. You take off seated from the back deck and land right back on it — no beach launch, no swimming. | Reworded + new ["Our state of the art vessel is built solely for your parasailing enjoyment. Up to 12 people…"] |
| `:30` | 12-passenger lounge / Hydraulic winch / Kevlar towline / USCG Master captains | New |
| `:31` | alt: Englewood Parasailing's 2023 Ocean Pro parasail boat with guests aboard | New |
| `:36-37` | $40 HD photo pack / Leave your phone on the boat — we've got the shots. | New |
| `:38` | Our crew captures 50–60 professional high-res digital photos of your takeoff, peak 1,200-ft flight, and splashdown. You take home the SD card ready to upload straight to your family album. | Reworded ["We take 50-60 high resolution digital photos of your entire ride and put the images on an SD card that you get to keep…"] |
| `:39` | 50–60 high-res photos / $40 per SD card / Add it at the dock | New |
| `:40` | alt: Three friends waving from the parasail high above the Gulf | New |
| `:86-87` | Book your flight / How a flight works | New labels |

### Home — Pricing section (`components/home/PricingSection.jsx`, `components/PricingCards.jsx`, `data/pricing.js`)

| Where | Text | Status |
| --- | --- | --- |
| `PricingSection.jsx:17-18` | Transparent pricing / Two ways up. No surprises. | New |
| `PricingSection.jsx:20` | Per person, upfront. Both flights launch and land dry on the boat deck, and the whole trip runs about an hour dock to dock. | New |
| `PricingSection.jsx:24` | Full pricing & extras | New |
| `PricingSection.jsx:10`, `data/pricing.js:28` | Fly together / Same price per person / Up to 3 fly together — single, tandem or triple | New |
| `PricingCards.jsx:24` | Standard flight / Big Air flight | Verbatim / **New name** [Deluxe Parasail] |
| `PricingCards.jsx:32-33` | 1,000 ft of line / ~9 min airborne (and 1,200 / ~14) | Reworded [1000Ft Tow Line / 9 Minutes in Air] |
| `PricingCards.jsx:44,51` | Book Standard / Book Big Air / or request by form | New |
| `data/pricing.js:6` | The classic flight — great for first-timers | Reworded [Afforadble For Beginners] |
| `data/pricing.js:9` | Great affordable flight for beginners / Dry deck takeoff and landing / Fly single, tandem or triple | Reworded / New / New |
| `data/pricing.js:18,22` | Deluxe flight to the FAA maximum height | New ["1200 Foot Flights FAA Approved"] |
| `data/pricing.js:21` | FAA maximum height — nobody flies higher / Optional ocean toe-dip on the way down / Extra airtime for photos and dolphin spotting | New / Reworded ["as well as a dip if you like"] / New |
| `data/pricing.js:23` | Most popular · Extra airtime | Reworded [Our Most Popular] |
| `data/pricing.js:31` | Optional free fall: the captain slows the boat and lets you drift down toward the water, then accelerates to bring you on an "elevator ride" back to the top — with a dip if you like. | Reworded [old pricing-page sentence, near verbatim] |
| `data/pricing.js:37-39` | $35 · $50 / $35 standby · $50 guaranteed seat / Ride along and watch! | Reworded [$35pp / $50 Guaranteed Seating] / New |
| `data/pricing.js:43-46` | Photo pack / per SD card / 50–60 pro shots of your whole flight | Reworded [Photos!] / New / New |
| `data/pricing.js:47` | We take 50–60 high-resolution digital photos of your entire ride and put them on an SD card you keep. Load them straight onto Facebook, email them — whatever you like. | Reworded [near verbatim; "whatever you like" replaces "etc ..."] |

`data/pricing.js:10,22` (`note` fields) are not rendered anywhere.

### Home — Availability (`components/home/Availability.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:10-12` | Live availability / Pick a day. We'll pick you up. / Live openings straight from our booking calendar. Tap a date to reserve online in about a minute. | New |
| `:14,19` | Book online / iframe title: Englewood Parasailing booking calendar | New |

### Home — Gallery teaser (`components/home/GalleryTeaser.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:4-6` | alts: Parasail canopy over the Gulf / Manasota Key from 1,200 feet / Englewood Beach and the Gulf from the parasail | New |
| `:14-15` | The view from the top / Gallery | New / Reworded [Parasailing Adventure Gallery] |
| `:16` | Englewood Beach, Manasota Key and the open Gulf, seen the way only our riders see them. | New [old: "Check out the amazing views parasailing in beautiful Englewood, FL."] |

### Home — Reviews band (`components/home/ReviewsBand.jsx`, `data/reviews.js`)

| Where | Text | Status |
| --- | --- | --- |
| `ReviewsBand.jsx:21` | Verified reviews | New |
| `ReviewsBand.jsx:26-27` | Stars across 1,200+ reviews / on Tripadvisor, Facebook, Google | New (figures unverified, see 1b) |
| `ReviewsBand.jsx:30` | First-timers, grandparents and kids as young as five — all grinning on the way down. | New |
| `ReviewsBand.jsx:32` | Read all reviews | Reworded [See Our Reviews] |
| `data/reviews.js:16,24,25` | chips: Families & kids / Higher, longer, dipped / Dolphins & felt safe | New (editorial tags) |
| `data/reviews.js:15-28` | 14 review quotes | Carried over from the Elfsight widget per the file comment; some have em dashes inserted. Not verifiable from the static scrape. |

### Home — Boat-rentals cross-sell (`components/home/BigCta.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:9-10` | Same dock · 1450 Beach Road / Make it the ultimate Englewood day on the water | New |
| `:12` | Fly 1,200 feet in the morning with Englewood Parasailing, then walk 20 feet down the dock and captain your own pontoon boat to the sandbars with Englewood Rental Boats. | New |
| `:15,17,29` | Book your flight / Rent a boat / Captain your own boat from the same dock | New [old: "Want to go Boating?"] |

### Home — Contact + request form (`components/home/Contact.jsx`, `components/LeadForm.jsx`)

The old `/contact/` page was unedited theme filler (lorem ipsum, "Extreme Sports", a London address), so everything here is new except the "Ready…? Time to fly!" caption.

| Where | Text | Status |
| --- | --- | --- |
| `Contact.jsx:9` | alt: A family parasailing above Englewood Beach | New |
| `Contact.jsx:28-30` | Contact / Request your flight / Tell us who's flying and when. A real human on the dock calls or texts back to lock in your time. | New |
| `Contact.jsx:33` | Weather calls are ours — if we scrub, you don't pay. | New (see 1b) |
| `LeadForm.jsx:46` | You're on the list, {name}. | New |
| `LeadForm.jsx:48` | We've got your {flight} (${price}) request for {party} on {date}. Watch your phone — we'll confirm the launch time shortly. | New |
| `LeadForm.jsx:55` | Send another request | New |
| `LeadForm.jsx:69-99` | Name / Phone / Email / Preferred date / Party size / Flight / Anything we should know? | New |
| `LeadForm.jsx:70,74,78,100` | placeholders: Who's flying? / (941) 555-0100 / you@example.com / Birthday, first-timers, want to get dipped… | New |
| `LeadForm.jsx:104,107` | Request my flight / Sending… / Demo mode — requests are not sent yet. | New |
| `LeadForm.jsx:39` | Could not send — call 833-FLY-1200. | New |

### Footer (`components/Footer.jsx`, `data/site.js`)

| Where | Text | Status |
| --- | --- | --- |
| `Footer.jsx:26` | Parasailing in Englewood, Florida — single, tandem and triple flights to 1,200 ft with the area's best-rated crew. | New |
| `Footer.jsx:70-72` | Hours & directions / Daily 8:00 am – 5:30 pm / Reservations required Sept – Jan | New heading / New (hours) / Verbatim |
| `Footer.jsx:75` | iframe title: Map to 1450 Beach Road, Englewood | New |

### Parasailing page (`pages/Parasailing.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:8` | 2023 Ocean Pro parasail boat, built solely for parasailing | Reworded |
| `:9` | Up to 12 people on board; up to 3 fly together | Reworded |
| `:10` | Kevlar towline on a winch — soft, controlled takeoff and landing | Reworded |
| `:11` | USCG Master licensed captains with years of experience | Reworded ["US Coast Guard certified and have years of parasailing experience"] — "Master licensed" is new |
| `:29` | alt: Drone view of a parasail flight off Englewood | New |
| `:39` | Never parasailed before? | Reworded [Never Parasailing Before?] |
| `:44` | Englewood Beach Parasailing uses the newest technology and systems to give anyone a safe, soft, controlled parasailing experience. Our state-of-the-art vessel is built solely for your parasailing enjoyment, and up to 12 people can come out on the boat for the excursion. | Reworded [near verbatim: "utilizes" → "uses", "provide" → "give", "go out" → "come out"] |
| `:47` | You and up to two friends or family members ride in the parasail together. From a seated position on the back deck you feel the boat pull away as you almost imperceptibly lift into the air. The Kevlar towline reels out from a winch so smoothly it feels as if the boat simply leaves you — while your view gets more beautiful the higher you climb. | Reworded [condensed; drops "and share the moment" and "leaving the gravity-bound world below"] |
| `:59` | Ask for the free fall. | New heading |
| `:61` | The captain slows the boat and lets you float down until you almost touch the water — then hits the throttle and up you come again. We can add a little splash too. Everyone lands softly back on the deck. | Reworded [condensed old "Want Even More Adventure?" paragraph] |
| `:65` | alt: Parasail canopy skimming toward the water | New |
| `:75` | alt: Englewood Parasailing's 2023 Ocean Pro parasail boat | New |
| `:78-79` | The boat / Our 2023 state-of-the-art Ocean Pro | New / Reworded [Our New State of the Art 2023 Ocean Pro Parasail Boat! Seats up to 12 People...] |
| `:88` | See pricing | New |

### Pricing page (`pages/Pricing.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:11` | Parasail prices | Reworded [The Best Parasail Prices] |
| `:13` | Per person, upfront, no surprises. Single, tandem or triple — up to three fly together. The whole trip runs about an hour dock to dock. | New |
| `:25` | Bring the crew. Keep the photos. | New |
| `:46` | Book online | New label |

### Reviews page (`pages/Reviews.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:29,32` | All reviews / Based on 1,255 reviews | New (figure unverified) |
| `:39` | Read on {Tripadvisor / Facebook / Google} | New |
| `:70-71` | Live feed / All 1,255 and counting | New |

Header ("Our rave reviews", "From our customers", "Read all about what our customers have to say…") is verbatim.

### Pics page (`pages/Pics.jsx`, `data/gallery.js`)

| Where | Text | Status |
| --- | --- | --- |
| `Pics.jsx:13` | Views from 1,200 feet over Englewood, Manasota Key and the Gulf. | New (second sentence is verbatim) |
| `Pics.jsx:36,43` | aria: Open photo: … / Photo viewer | New |
| `Pics.jsx:54` | Book a flight | New label |
| `data/gallery.js:3-17` | All 15 alt texts (e.g. "Parasail canopy over the Gulf of Mexico", "Drone view of the parasail boat off Englewood Beach", "Riders lifting off the back deck", "Aerial view of Manasota Key", "Tandem flight over turquoise water", "Parasail flight at sunset", "Happy guests after a flight") | New (old alts were filenames) |

### Social page (`pages/Social.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:7` | Englewood Parasailing Tours / Photos from the dock, season updates and specials. | New |
| `:16` | Follow along, tag your flight photos, and see what's happening on the water this week. | New |
| `:42` | Our Instagram happenings | Reworded [Instagram Happenings] |

### 404 page (`pages/NotFound.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:11-16` | That page drifted off. / The link you followed doesn't go anywhere. Head home, or give us a call. / Back home | New |

---

## 3. Rental boats — full list by section

The old site had real content on `/`, `/boat-rental-englewood-fl/` (fleet + rates) and `/faqs/`. Most new copy is new writing; the facts that conflict are in 1b.

### Head / SEO (`rentalboats/index.html`, `pages/Home.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `index.html:10`, `pages/Home.jsx:14` | Englewood Rental Boats — Pontoon, Skiff & Center Console Rentals in Englewood, FL | New [old title: "Englewood Rental Boats - Englewood Florida Call 941-475-0733 Affordable rental boats"] |
| `index.html:11`, `pages/Home.jsx:16` | Rent a pontoon, skiff, deck boat or center console at 1450 Beach Road on Manasota Key. Five boats, 4/6/8-hour rates from $199, fueled up and ready at the dock. Call 941-475-0733. | New (fuel claim, see 1b) |
| `pages/NotFound.jsx:6` | Page not found — Englewood Rental Boats / That page sailed off. Head back to Englewood Rental Boats. | New |

### Nav / sticky bar (`components/Navbar.jsx`, `StickyBookingBar.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `Navbar.jsx:8-11` | The fleet / Explore / Reviews / FAQ | New [old: Home, Booking/Our Rental Boats, Rental Boat Galleries, FAQs, Map & Contact Us, Parasailing] |
| `Navbar.jsx:40` | Book Online | Reworded [Book Now!] |
| `StickyBookingBar.jsx:10-11` | Call Direct / Book Online | New |

### Hero (`components/home/Hero.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:10` | alt: Pontoon boat on turquoise water off Manasota Key | New |
| `:35` | Englewood, FL · Manasota Key Dock | New |
| `:37` | Be Your Own Captain. Explore Private Sandbars & Secret Beaches. | New |
| `:40` | Rent a pontoon, skiff, or center console right on Beach Road. Cruise Manasota Key, drop anchor at Stump Pass sandbar, watch wild dolphins, and island-hop at your own pace. No boating license required. | New (license claim, see 1b) |
| `:43` | Book Your Boat Online | Reworded [Book Now!] |

### Trust bar (`components/home/TrustBar.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:6` | No Boat License Needed / Anyone 25+ can drive; dockside driving briefing included | New (conflicts, see 1b) |
| `:7` | All USCG Safety Gear Included / Life jackets, fire extinguisher, safety horn | Reworded [Safety Gear — "All USCG required elements: horn, fire extinguisher, and PFDs."] |
| `:8` | GPS & Sandbar Map / Pre-marked safe channels & best dolphin spots | New (see 1b) |
| `:9` | Fueled Up & Ready at the Dock / No ramp hassle, step right aboard | New (conflicts, see 1b) |
| `:10` | Dog-Friendly Fleet / Bring your four-legged co-captain | New (see 1b) |

### Fleet (`components/home/Fleet.jsx`, `data/boats.js`)

| Where | Text | Status |
| --- | --- | --- |
| `Fleet.jsx:9-10` | The fleet / Pick your boat. Transparent rates, no surprises. | New |
| `data/boats.js:73-75` | All Boats / Pontoons & Leisure / Center Consoles & Fishing | New [old groupings: "Pontoon Boats & Skiffs", "Center Consoles & Deck Boats"] |
| `Fleet.jsx:39-40,46,56` | Up to {n} guests / Best for: … / Select & Book Now | New UI |
| `data/boats.js:7,12-13` | 22' Sun Catcher Pontoon / Large Families, Sandbars & Shelling / Spacious lounge seating, heavy-duty bimini shade, and swimming ladder. Nose right up to the sandbar. | New (year, hp, capacity, rates match old) |
| `data/boats.js:19,24-25` | 20' Aloha Pontoon / Sandbar Hopping & Casual Cruising / Comfortable couches, easy boarding, and plenty of cooler space for a day at Stump Pass. | New (6 h / 8 h rates assumed, see 1b) |
| `data/boats.js:31,36-37` | 20' Bayliner Deck Boat / Speed, Watersports & Open Water / Combines the spacious deck of a pontoon with the speed and hull performance of a runabout. | New (all rates assumed, see 1b) |
| `data/boats.js:43,48-50` | 19' Scout Center Console / 4 adults recommended / Inshore Fishing & Gulf Exploration / Built for speed, rod holders, livewell, and handling open water chop. Ideal for serious anglers. | New / Reworded ["4 is most comfortable if all adults"] / New / New |
| `data/boats.js:57,62-63` | 17' Key West Skiff / Backcountry Fishing & Shallow Bays / Nimble, shallow-draft skiff to explore backcountry mangroves and secluded fishing honey-holes. | New (capacity assumed, see 1b) |
| `data/boats.js:69,79-81` | Pontoon / Deck boat / Center console / Skiff; 4 hours / 6 hours / Full day (8h) | New labels |
| `data/boats.js:85` | Rates exclude tax. 15% automatic gratuity applies for dockside boat cleaning and fueling. | Reworded [NOTE: There is a 15% automatic gratuity charged for boat cleaning and fueling] |

### Explore tiles (`components/home/UseItFor.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:12-13` | What Will You Explore? / Four days on the water. Pick one, or do them all. | New |
| `:3` | Stump Pass Sandbar Party / Anchor in crystal-clear knee-deep water, set up beach chairs, float with cold drinks. | New |
| `:4` | Dolphin & Manatee Cruising / Cruise Lemon Bay and the Intracoastal where dolphins play in your boat's wake. | New |
| `:5` | Don Pedro Shelling & Shark Teeth / Accessible only by boat; find prehistoric fossil shark teeth along virgin Gulf beaches. | New |
| `:6` | Gulf & Bay Fishing / Redfish, snook, trout, and tarpon right off the mangroves. | New |

Old equivalent: "Use Our Boats For: Fishing, Shelling & Beach Excursions, Snorkling & Swimming, Sandbar Hopping, Cruising" and "Renting a boat gives you the freedom to cruise, sandbar hop, fish, dolphin watch and so much more…."

### Included (`components/home/Included.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:14-15` | Every rental includes / We handle the boring parts. You handle the throttle. | New [old: Our Rentals Include:] |
| `:2` | Inspected, well-kept boats / Every hull is safety-checked before it leaves the dock. Trouble-free day, guaranteed. | Reworded ["Well Maintained Inspected Boats — All our boats are safety inspected and assured to provide you a trouble free day on the water."] — "guaranteed" is stronger than "assured" |
| `:3` | All the USCG safety gear / Life jackets for everyone, horn, fire extinguisher — already aboard. | Reworded |
| `:4` | A quick dock briefing / Channel markers, the good sandbars, where the dolphins hang out. Then it's all yours. | New (see 1b) |
| `:11` | alt: Family relaxing on a rental boat | New |

### Reviews (`components/home/Reviews.jsx`, `data/reviews.js`)

| Where | Text | Status |
| --- | --- | --- |
| `Reviews.jsx:17-18` | 4.9 out of 5 Stars / Across 400+ Florida adventurers · Google reviews | New (unverified, see 1b) |
| `Reviews.jsx:31` | · Google review (after every quote) | New attribution |
| `data/reviews.js:6-17` | Six quotes | Excerpts of the old testimonials, names shortened to initial (e.g. "Mathew Greyton" → "Mathew G."). Old section heading "OUR AMAZING CUSTOMER'S PERSPECTIVE" dropped. |

### Request form (`components/home/Book.jsx`, `components/BookForm.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `Book.jsx:7-8` | Prefer a human? / Request a date or ask us anything. | New |
| `Book.jsx:10` | Group outing, fishing gear, a question about the passes? Send it over and we'll get back to you with availability. | New [old: "Booking is fast and easy. Simply use the online booking tool or feel free to call in a reservation 941-475-0733! We are here to help make your day on the water a great experience!"] |
| `Book.jsx:13` | Or just call 941-475-0733, 8 am – 6 pm daily. | Reworded |
| `BookForm.jsx:49,51` | Aye aye, {name}. / {boat}, {duration} on {date} for {guests}. We'll confirm by phone or text shortly. | New |
| `BookForm.jsx:54,63-101` | Send another request / Name / Phone / Email / Date / Guests / Boat / Duration / Anything we should know? | New |
| `BookForm.jsx:64,68,72,86,102` | placeholders: Captain for the day / (941) 555-0100 / you@example.com / Whatever's available / Bringing the dog, want fishing gear, first time at the wheel… | New |
| `BookForm.jsx:105,107,41` | Send request / Sending… / Demo mode — requests are not sent yet. / Could not send — call 941-475-0733. | New |

### Booking dialog — demo placeholder (`components/BookingWidget.jsx`)

Marked in code as a demo to be replaced by the real widget. All text is new: "Demo — not a real reservation. To book today, call 941-475-0733.", "Book online", "Reserve your boat", "Guests (max {n})", "+ tax", "Reserve now", "You're on the books.", "{boat}, {duration} on {date} for {guests}. ${price} + tax and gratuity.", aria "Book a boat".

### Parasailing cross-sell (`components/home/ParasailPromo.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:6-7` | The Ultimate Vacation Day / Want to See the Sandbar from 1,200 Feet? | New [old: "Want to Try Parasiling Too? Visit Our Parasailing Site."] |
| `:9` | Both businesses leave from our private dock at 1450 Beach Rd. Fly over the Gulf in the morning, then step right onto your rental pontoon for an afternoon sandbar picnic. | New |
| `:11` | Check Parasailing Flights | New |
| `:19` | alt: Parasail canopy over Englewood Beach | New |

### FAQ (`components/home/Faq.jsx`, `data/faq.js`)

All five Q&As are new writing. Old FAQ text is in `assets-raw/old-site-text/rb/faqs.txt`.

| Where | Text | Status |
| --- | --- | --- |
| `Faq.jsx:7-8` | Before you go / Quick answers | New |
| `data/faq.js:5-6` | Do I need a boating license? / No. Anyone 25 or older with a valid driver's license can captain. We walk you through the boat and the channels at the dock before you leave. | New — **conflicts** with old "at least 27 years old … safety boaters course" |
| `data/faq.js:9-10` | What's included? / All USCG safety gear (life jackets, fire extinguisher, horn), a full tank, GPS with the safe channels and sandbars marked, and a bimini for shade on the pontoons. | New — **conflicts** with old "fuel cost is not included" |
| `data/faq.js:13-14` | How do the rates work? / Pick 4, 6 or 8 hours. Rates start at $199 for the skiff and exclude tax. A 15% automatic gratuity covers dockside cleaning and fueling. | Reworded (facts match old) |
| `data/faq.js:17-18` | What if the weather turns? / We make the call, not you. If we cancel for weather, you don't pay — we'll rebook or refund. | Reworded [no fees for weather cancellations; reschedule] — "refund" is new |
| `data/faq.js:21-22` | Can we bring the dog? Coolers? / Yes and yes. Pontoons are the crowd favorite for both. | New |

### Footer (`components/Footer.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:18` | Five inspected rental boats on Manasota Key. Be your own captain, at your own pace. | New |
| `:20,24,28` | Find us / Hours / Family | New headings [old: Address / Business Hours / Get In Touch] |

### 404 page (`pages/NotFound.jsx`)

| Where | Text | Status |
| --- | --- | --- |
| `:11-15` | That page sailed off. / The link you followed doesn't go anywhere. Head home, or give us a call. / Back home | New |
