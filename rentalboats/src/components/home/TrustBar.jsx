import { Fuel, LifeBuoy, Map, PawPrint, Ship } from "lucide-react";

// Fear & friction killers. The driver age, GPS and dog claims are not on the live site —
// verify with the owner before launch.
const ITEMS = [
	{ icon: Ship, title: "No Boat License Needed", text: "Anyone 25+ can drive; dockside driving briefing included" },
	{ icon: LifeBuoy, title: "All USCG Safety Gear Included", text: "Life jackets, fire extinguisher, safety horn" },
	{ icon: Map, title: "GPS & Sandbar Map", text: "Pre-marked safe channels & best dolphin spots" },
	{ icon: Fuel, title: "Fueled Up & Ready at the Dock", text: "No ramp hassle, step right aboard" },
	{ icon: PawPrint, title: "Dog-Friendly Fleet", text: "Bring your four-legged co-captain" },
];

export function Item({ icon: Icon, title, text }) {
	return (
		<li className="flex flex-col gap-2.5 p-5">
			<span className="grid size-11 place-items-center rounded-xl bg-teal-50 text-teal"><Icon size={22} /></span>
			<strong className="font-display text-xl uppercase leading-none text-navy">{title}</strong>
			<span className="text-[13px] leading-snug text-muted">{text}</span>
		</li>
	);
}

export default function TrustBar() {
	return (
		<section className="container-x relative z-10 -mt-10 pb-20">
			<ul className="card m-0 grid list-none grid-cols-2 divide-y divide-line p-0 md:grid-cols-5 md:divide-x md:divide-y-0">
				{ITEMS.map((it) => <Item key={it.title} {...it} />)}
			</ul>
		</section>
	);
}
