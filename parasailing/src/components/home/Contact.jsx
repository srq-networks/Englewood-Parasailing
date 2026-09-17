import { CANCELLATION } from "../../data/site";
import LeadForm from "../LeadForm";

export function Photo() {
	return (
		<figure className="relative m-0 min-h-[420px] overflow-hidden rounded-3xl bg-canvas-2">
			<img
				src="/images/home/family.webp"
				alt="A family parasailing above Englewood Beach"
				width="845"
				height="1024"
				loading="lazy"
				className="photo absolute inset-0 size-full object-cover object-[50%_30%]"
			/>
			<span className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-navy/85" />
			<figcaption className="absolute right-7 bottom-7 left-7 font-display text-[clamp(34px,4vw,56px)] font-extrabold uppercase leading-none text-white">
				<span className="block text-white/80">Ready…?</span>
				<span className="block text-yellow">Time to fly!</span>
			</figcaption>
		</figure>
	);
}

export function FormCard({ flight, onFlightChange }) {
	return (
		<div className="card flex flex-col gap-5 rounded-3xl px-[clamp(22px,3vw,40px)] py-9">
			<div className="flex flex-col gap-2.5">
				<span className="eyebrow">Contact</span>
				<h2 className="m-0 text-[clamp(28px,3vw,40px)]">Request your flight</h2>
				<p className="m-0 text-[15px] text-ink-2">Tell us who's flying and when. A real human on the dock calls or texts back to lock in your time.</p>
			</div>
			<LeadForm flight={flight} onFlightChange={onFlightChange} />
			<p className="m-0 text-xs text-ink-3">Cancellation policy: {CANCELLATION} Weather calls are ours — if we scrub, you don't pay.</p>
		</div>
	);
}

export default function Contact({ flight, onFlightChange }) {
	return (
		<section id="contact" className="container-x section-pad grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-stretch gap-x-[clamp(28px,5vw,72px)] gap-y-10">
			<Photo />
			<FormCard flight={flight} onFlightChange={onFlightChange} />
		</section>
	);
}
