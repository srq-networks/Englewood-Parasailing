import { Link } from "react-router-dom";
import { Binoculars, Camera, Droplets, Ship } from "lucide-react";
import BookButton from "../BookButton";

const THRILLS = [
	{
		id: "toe-dip",
		Icon: Droplets,
		eyebrow: "The famous toe dip",
		title: "Want a little splash? Ask for the toe dip!",
		text: "At the end of your flight, the captain can slow the boat and let you gently float down until your toes skim the emerald water — then hit the throttle for an elevator ride back into the sky. Prefer to stay 100% bone dry? Just tell the captain before takeoff!",
		chips: ["Your call — dry or dipped", "Included with every flight"],
		img: { src: "/images/parasailing/dji_00342.webp", alt: "Parasail canopy skimming down toward the water", width: 1600, height: 634 },
	},
	{
		id: "wildlife",
		Icon: Binoculars,
		eyebrow: "Aerial wildlife safari",
		title: "Dolphins, sea turtles and rays — from 1,200 feet up.",
		text: "From the top of the line the Gulf turns to glass and you can see straight through it. Riders spot dolphins riding the boat's wake, sea turtles coming up for air, stingrays gliding over the sandbars and, in the cooler months, manatees in the pass. Keep looking down — the best show is below you.",
		chips: ["Dolphins", "Sea turtles", "Stingrays", "Manatees"],
		img: { src: "/images/gallery/ep4.webp", alt: "Two riders parasailing high over the turquoise Gulf off Englewood Beach", width: 1600, height: 900 },
	},
	{
		id: "boat",
		Icon: Ship,
		eyebrow: "Your ride",
		title: "The 2023 Ocean Pro — built for one thing.",
		text: "Custom-built in 2023 solely for passenger parasailing. Features a 12-passenger lounge, state-of-the-art hydraulic winch, and Kevlar towlines for the smoothest flight on the Gulf Coast. You take off seated from the back deck and land right back on it — no beach launch, no swimming.",
		chips: ["12-passenger lounge", "Hydraulic winch", "Kevlar towline", "USCG Master captains"],
		img: { src: "/images/parasailing/boat.webp", alt: "Englewood Parasailing's 2023 Ocean Pro parasail boat with guests aboard", width: 1033, height: 592 },
	},
	{
		id: "photos",
		Icon: Camera,
		eyebrow: "$40 HD photo pack",
		title: "Leave your phone on the boat — we've got the shots.",
		text: "Our crew captures 50–60 professional high-res digital photos of your takeoff, peak 1,200-ft flight, and splashdown. You take home the SD card ready to upload straight to your family album.",
		chips: ["50–60 high-res photos", "$40 per SD card", "Add it at the dock"],
		img: { src: "/images/home/img_7836.webp", alt: "Three friends waving from the parasail high above the Gulf", width: 1024, height: 683 },
	},
];

export function Header() {
	return (
		<div className="flex max-w-[60ch] flex-col gap-4">
			<span className="eyebrow">What everyone talks about</span>
			<h2 className="display m-0">The moments you'll still be telling people about.</h2>
			<p className="m-0 text-lg text-ink-2">About an hour dock to dock, up to fourteen minutes at the top, and a few moments you'll want to remember on purpose.</p>
		</div>
	);
}

export function Row({ thrill, flip }) {
	const { Icon, eyebrow, title, text, chips, img } = thrill;
	return (
		<article className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-x-[clamp(28px,6vw,88px)] gap-y-8">
			<figure className={`relative m-0 aspect-[4/3] overflow-hidden rounded-3xl bg-canvas-2 shadow-[0_30px_60px_-30px_rgba(12,35,64,0.45)] ${flip ? "lg:order-2" : ""}`}>
				<img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" className="photo size-full object-cover" />
				<span className="absolute top-5 left-5 grid size-12 place-items-center rounded-2xl bg-white/90 text-sky shadow-lg">
					<Icon size={24} />
				</span>
			</figure>
			<div className="flex flex-col gap-5">
				<span className="eyebrow">{eyebrow}</span>
				<h3 className="m-0 text-[clamp(34px,3.8vw,54px)]">{title}</h3>
				<p className="m-0 text-lg text-ink-2">{text}</p>
				<ul className="m-0 flex list-none flex-wrap gap-2 p-0">
					{chips.map((c) => (
						<li key={c} className="chip">{c}</li>
					))}
				</ul>
			</div>
		</article>
	);
}

export default function Thrills() {
	return (
		<section id="adventure" className="container-x section-pad flex flex-col gap-[clamp(56px,8vw,112px)]">
			<Header />
			{THRILLS.map((t, i) => (
				<Row key={t.id} thrill={t} flip={i % 2 === 1} />
			))}
			<div className="flex flex-wrap items-center gap-4">
				<BookButton className="btn btn-coral">Book your flight</BookButton>
				<Link to="/parasailing" className="btn btn-secondary"><span>How a flight works</span></Link>
			</div>
		</section>
	);
}
