import { useState } from "react";
import { Phone, Play, Zap } from "lucide-react";
import { PHONE_HREF, PHONE_VANITY, SEASON_NOTICE } from "../../data/site";
import { FLIGHTS } from "../../data/pricing";
import BookButton from "../BookButton";
import Lightbox from "../Lightbox";

const FROM_PRICE = Math.min(...FLIGHTS.map((f) => f.price));

// Full-bleed photo with a navy wash at the bottom so the copy stays legible.
export function Backdrop() {
	return (
		<>
			<img
				src="/images/parasailing/dji_0051.webp"
				alt=""
				width="1600"
				height="900"
				fetchPriority="high"
				className="photo absolute inset-0 -z-20 size-full object-cover object-[62%_45%]"
			/>
			<div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/35 to-navy/5" />
			<div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-navy/50 via-transparent to-transparent" />
		</>
	);
}

export function Copy() {
	return (
		<div className="flex max-w-[880px] flex-col gap-6 text-white">
			<span className="eyebrow text-yellow drop-shadow-[0_2px_8px_rgba(7,26,48,0.7)]">Englewood's #1 rated water adventure · Ages 5 to 105</span>
			<h1 className="m-0 text-[clamp(56px,8.4vw,116px)] drop-shadow-[0_6px_28px_rgba(7,26,48,0.5)]">
				Soar <span className="text-yellow">1,200 feet</span> above the Gulf of Mexico.
			</h1>
			<p className="m-0 max-w-[58ch] text-lg text-white/90 md:text-xl">
				Experience Englewood's ultimate view. Fly single, tandem or triple with the area's original and only full-time parasail team. Spot wild dolphins and sea turtles, feel the warm ocean breeze, and make the highlight memory of your vacation.{" "}
				<strong className="text-white">Zero experience needed.</strong>
			</p>
			<div className="flex flex-wrap items-center gap-3">
				<BookButton>
					<Zap size={20} fill="currentColor" strokeWidth={0} /> Book your flight online
				</BookButton>
				<a href={PHONE_HREF} className="btn btn-light">
					<span><Phone size={20} /> Call {PHONE_VANITY}</span>
				</a>
			</div>
			<span className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/75">
				Flights from ${FROM_PRICE} · {SEASON_NOTICE}
			</span>
		</div>
	);
}

export function WatchButton() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<button type="button" onClick={() => setOpen(true)} className="group flex flex-none cursor-pointer items-center gap-3.5 self-start text-left whitespace-nowrap text-white">
				<span className="grid size-14 flex-none place-items-center rounded-full bg-white/15 ring-2 ring-white/80 backdrop-blur transition-colors group-hover:bg-yellow group-hover:text-navy group-hover:ring-yellow">
					<Play size={22} fill="currentColor" />
				</span>
				<span className="flex flex-col gap-0.5">
					<span className="font-display text-xl font-bold uppercase leading-none">Watch the flight</span>
					<span className="text-[13px] text-white/75">Sound on · 1:33</span>
				</span>
			</button>
			<Lightbox open={open} onClose={() => setOpen(false)} label="Englewood Parasailing video">
				<video src="/video/englewood.mp4" poster="/video/poster.webp" controls autoPlay playsInline className="max-h-full max-w-full rounded-2xl" />
			</Lightbox>
		</>
	);
}

export default function Hero() {
	return (
		<section className="relative isolate flex min-h-[min(92svh,920px)] items-end overflow-hidden bg-navy">
			<Backdrop />
			<div className="container-x flex w-full flex-col gap-10 pt-[clamp(104px,16vw,200px)] pb-[clamp(72px,9vw,120px)] lg:flex-row lg:items-end lg:justify-between">
				<Copy />
				<WatchButton />
			</div>
		</section>
	);
}
