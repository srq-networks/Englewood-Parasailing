import { Anchor, Rocket, ShieldCheck, Turtle, Users } from "lucide-react";
import { SAFETY_YEARS } from "../../data/site";

// The five objections a nervous first-timer has, answered before they scroll.
const POINTS = [
	{ Icon: ShieldCheck, title: "100% perfect safety record", text: `${SAFETY_YEARS} years incident-free` },
	{ Icon: Anchor, title: "USCG Master licensed captains", text: "The area's only full-time, year-round crew" },
	{ Icon: Rocket, title: "Gentle deck takeoff & landing", text: "Take off seated, land on your feet — completely dry" },
	{ Icon: Users, title: "Tandem & triple flights", text: "Fly 2 or 3 side-by-side with family" },
	{ Icon: Turtle, title: "Wildlife sightings daily", text: "Dolphins, turtles and rays from above" },
];

export default function TrustBar() {
	return (
		<section id="why-us" aria-label="Why fly with Englewood Parasailing" className="container-x relative z-10 -mt-12">
			<ul className="card m-0 grid list-none grid-cols-2 gap-px overflow-hidden bg-line p-0 sm:grid-cols-3 lg:grid-cols-5">
				{POINTS.map(({ Icon, title, text }) => (
					<li key={title} className="flex flex-col gap-3 bg-white px-5 py-6 last:col-span-2 sm:last:col-span-1">
						<span className="grid size-11 place-items-center rounded-xl bg-canvas-2 text-sky">
							<Icon size={24} />
						</span>
						<span className="font-display text-xl font-bold uppercase leading-none">{title}</span>
						<span className="text-sm text-ink-2">{text}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
