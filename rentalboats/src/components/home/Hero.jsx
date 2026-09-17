import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../../data/site";
import useBooking from "../../hooks/useBooking";

export function Backdrop() {
	return (
		<>
			<img
				src="/images/fleet/suncatcher.webp"
				alt="Pontoon boat on turquoise water off Manasota Key"
				width="1600"
				height="1066"
				fetchPriority="high"
				className="photo absolute inset-0 -z-20 size-full object-cover"
			/>
			<div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-deep/95 via-navy/45 to-navy/15" />
		</>
	);
}

export function Copy() {
	const { open } = useBooking();
	return (
		<div className="container-x flex w-full flex-col gap-6 pt-24 pb-24 md:pb-28">
			<span className="eyebrow text-sun">Englewood, FL · Manasota Key Dock</span>
			<h1 className="m-0 max-w-[22ch] text-[clamp(44px,6.5vw,88px)]">
				Be Your Own Captain. <span className="text-teal-light">Explore Private Sandbars &amp; Secret Beaches.</span>
			</h1>
			<p className="m-0 max-w-[58ch] text-lg text-white/85 md:text-xl">
				Rent a pontoon, skiff, or center console right on Beach Road. Cruise Manasota Key, drop anchor at Stump Pass sandbar, watch wild dolphins, and island-hop at your own pace. No boating license required.
			</p>
			<div className="flex flex-wrap gap-3">
				<button type="button" onClick={() => open()} className="btn btn-coral">Book Your Boat Online</button>
				<a href={PHONE_HREF} className="btn btn-ghost"><Phone size={18} /> Call {PHONE_DISPLAY}</a>
			</div>
		</div>
	);
}

export default function Hero() {
	return (
		<section className="relative isolate flex min-h-[min(88vh,820px)] items-end overflow-hidden bg-deep text-white">
			<Backdrop />
			<Copy />
		</section>
	);
}
