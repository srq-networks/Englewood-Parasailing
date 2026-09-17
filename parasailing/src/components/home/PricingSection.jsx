import { Link } from "react-router-dom";
import { Camera, Eye, Users } from "lucide-react";
import { EXTRAS, TOGETHER } from "../../data/pricing";
import PricingCards from "../PricingCards";

const EXTRA_ICONS = { Observers: Eye, "Photo pack": Camera };

const ADD_ONS = [
	...EXTRAS.map((x) => ({ Icon: EXTRA_ICONS[x.name], title: x.name, price: x.priceNote, text: x.short })),
	{ Icon: Users, title: "Fly together", price: "Same price per person", text: TOGETHER },
];

export function Intro() {
	return (
		<div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
			<div className="flex max-w-[52ch] flex-col gap-4">
				<span className="eyebrow">Transparent pricing</span>
				<h2 className="display m-0">Two ways up. No surprises.</h2>
				<p className="m-0 text-lg text-ink-2">
					Per person, upfront. Both flights launch and land dry on the boat deck, and the whole trip runs about an hour dock to dock.
				</p>
			</div>
			<Link to="/pricing" className="btn btn-secondary btn-sm">
				<span>Full pricing &amp; extras</span>
			</Link>
		</div>
	);
}

export function AddOns() {
	return (
		<ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 p-0">
			{ADD_ONS.map(({ Icon, title, price, text }) => (
				<li key={title} className="card flex items-start gap-4 p-5">
					<span className="grid size-11 flex-none place-items-center rounded-xl bg-canvas-2 text-sky">
						<Icon size={22} />
					</span>
					<span className="flex flex-col gap-0.5">
						<span className="font-display text-xl font-bold uppercase leading-none">{title}</span>
						<span className="text-sm font-bold text-sky-deep">{price}</span>
						<span className="text-sm text-ink-2">{text}</span>
					</span>
				</li>
			))}
		</ul>
	);
}

export default function PricingSection({ onPick }) {
	return (
		<section id="pricing" className="bg-canvas section-pad">
			<div className="container-x flex flex-col gap-10">
				<Intro />
				<PricingCards onPick={onPick} />
				<AddOns />
			</div>
		</section>
	);
}
