import { useState } from "react";
import { Gauge, Users } from "lucide-react";
import { BOATS, CATEGORIES, CATEGORY_LABELS, DURATIONS, PRICING_NOTE } from "../../data/boats";
import useBooking from "../../hooks/useBooking";

export function Header() {
	return (
		<div className="flex max-w-[60ch] flex-col gap-4">
			<span className="eyebrow">The fleet</span>
			<h2 className="display m-0">Pick your boat. Transparent rates, no surprises.</h2>
		</div>
	);
}

export function Filters({ cat, onChange }) {
	return (
		<div className="flex flex-wrap gap-2" role="group" aria-label="Filter boats">
			{CATEGORIES.map((c) => (
				<button
					key={c.id}
					type="button"
					aria-pressed={cat === c.id}
					onClick={() => onChange(c.id)}
					className={`tag cursor-pointer border-2 px-4 py-2.5 transition-colors ${cat === c.id ? "border-navy bg-navy text-white" : "border-line bg-surface text-navy hover:border-teal"}`}
				>
					{c.label}
				</button>
			))}
		</div>
	);
}

export function BoatCard({ boat }) {
	const { open } = useBooking();
	return (
		<article className="card flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift">
			<figure className="relative m-0 aspect-[4/3] bg-teal-50">
				<img src={boat.img} alt={boat.name} loading="lazy" className="photo size-full object-cover" />
				<span className="tag absolute top-3 left-3 bg-deep/80 text-white backdrop-blur"><Users size={14} /> Up to {boat.capacity} guests</span>
				<span className="tag absolute bottom-3 left-3 bg-deep/80 text-white backdrop-blur"><Gauge size={14} /> {boat.engine}</span>
			</figure>
			<div className="flex grow flex-col gap-3 px-6 pt-5 pb-6">
				<span className="eyebrow">{CATEGORY_LABELS[boat.category]} · {boat.year}</span>
				<h3 className="m-0 text-[28px]">{boat.name}</h3>
				<p className="m-0 text-[15px] text-muted">{boat.blurb}</p>
				<span className="tag self-start bg-teal-50 text-navy">Best for: {boat.bestFor}</span>
				<dl className="m-0 mt-1 grid grid-cols-3 divide-x divide-line rounded-xl border border-line bg-bg">
					{DURATIONS.map((d) => (
						<div key={d.id} className="flex flex-col items-center gap-0.5 px-2 py-3">
							<dt className="text-[11px] font-bold tracking-wider text-muted uppercase">{d.short}</dt>
							<dd className="m-0 font-display text-2xl text-navy">${boat.rates[d.id]}</dd>
						</div>
					))}
				</dl>
				<button type="button" onClick={() => open(boat.id)} className="btn btn-primary btn-sm mt-auto w-full">
					Select &amp; Book Now
				</button>
			</div>
		</article>
	);
}

export function Cards({ cat }) {
	const types = CATEGORIES.find((c) => c.id === cat).types;
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
			{BOATS.filter((b) => types.includes(b.category)).map((b) => <BoatCard key={b.id} boat={b} />)}
		</div>
	);
}

export default function Fleet() {
	const [cat, setCat] = useState("all");
	return (
		<section id="fleet" className="container-x flex flex-col gap-8 pb-24">
			<Header />
			<Filters cat={cat} onChange={setCat} />
			<Cards cat={cat} />
			<p className="m-0 text-sm text-muted">{PRICING_NOTE}</p>
		</section>
	);
}
