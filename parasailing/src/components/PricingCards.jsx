import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { FLIGHTS } from "../data/pricing";
import BookButton from "./BookButton";

// The two flights, side by side. `onPick(id)` (home page only) pre-selects the flight
// in the request form and links down to it.
export default function PricingCards({ onPick }) {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
			{FLIGHTS.map((f) => (
				<div
					key={f.id}
					className={`relative flex flex-col gap-4 rounded-3xl p-7 pt-9 ${
						f.featured ? "bg-navy text-white shadow-[0_30px_60px_-30px_rgba(12,35,64,0.6)] ring-4 ring-yellow" : "card"
					}`}
				>
					{f.badge && (
						<span className="absolute -top-4 left-6 inline-flex items-center gap-1.5 rounded-full bg-yellow px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-navy shadow-md">
							<Star size={14} fill="currentColor" strokeWidth={0} /> {f.badge}
						</span>
					)}
					<div className="flex flex-col gap-1">
						<span className={`font-display text-2xl font-bold uppercase leading-none ${f.featured ? "text-yellow" : "text-navy"}`}>{f.name} flight</span>
						<span className={`text-sm ${f.featured ? "text-white/75" : "text-ink-3"}`}>{f.tagline}</span>
					</div>
					<div className="flex items-baseline gap-1.5">
						<span className="font-display text-[64px] font-extrabold leading-none">${f.price}</span>
						<span className={`text-sm ${f.featured ? "text-white/75" : "text-ink-3"}`}>per person</span>
					</div>
					<div className="flex flex-wrap gap-2">
						<span className={`chip ${f.featured ? "bg-white/10 text-white" : ""}`}>{f.height.toLocaleString()} ft of line</span>
						<span className={`chip ${f.featured ? "bg-white/10 text-white" : ""}`}>~{f.minutes} min airborne</span>
					</div>
					<ul className={`m-0 flex list-none flex-col gap-2.5 p-0 text-[15px] leading-snug ${f.featured ? "text-white/90" : "text-ink-2"}`}>
						{f.bullets.map((b) => (
							<li key={b} className="flex gap-2.5">
								<Check size={18} strokeWidth={3} className={`mt-0.5 flex-none ${f.featured ? "text-yellow" : "text-teal"}`} />
								{b}
							</li>
						))}
					</ul>
					<div className="mt-2 flex flex-wrap items-center gap-3">
						<BookButton className={`btn ${f.featured ? "btn-primary" : "btn-secondary"}`}>Book {f.name}</BookButton>
						{onPick && (
							<Link
								to="/#contact"
								onClick={() => onPick(f.id)}
								className={`text-[13px] font-bold uppercase tracking-[0.04em] ${f.featured ? "text-white/80 hover:text-white" : ""}`}
							>
								or request by form
							</Link>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
