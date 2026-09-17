// Experience tiles reuse fleet photos until dedicated shots land in assets-raw/rb.
const EXPERIENCES = [
	{ title: "Stump Pass Sandbar Party", text: "Anchor in crystal-clear knee-deep water, set up beach chairs, float with cold drinks.", img: "/images/fleet/suncatcher.webp" },
	{ title: "Dolphin & Manatee Cruising", text: "Cruise Lemon Bay and the Intracoastal where dolphins play in your boat's wake.", img: "/images/fleet/aloha.webp" },
	{ title: "Don Pedro Shelling & Shark Teeth", text: "Accessible only by boat; find prehistoric fossil shark teeth along virgin Gulf beaches.", img: "/images/fleet/family.webp" },
	{ title: "Gulf & Bay Fishing", text: "Redfish, snook, trout, and tarpon right off the mangroves.", img: "/images/fleet/scout.webp" },
];

export function Header() {
	return (
		<div className="flex max-w-[60ch] flex-col gap-4">
			<span className="eyebrow">What Will You Explore?</span>
			<h2 className="display m-0">Four days on the water. Pick one, or do them all.</h2>
		</div>
	);
}

export function Tile({ title, text, img }) {
	return (
		<article className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-navy text-white shadow-card">
			<img src={img} alt="" loading="lazy" className="photo absolute inset-0 -z-20 size-full object-cover transition-transform duration-500 hover:scale-105" />
			<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-deep/95 via-deep/40 to-transparent" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
				<h3 className="m-0 text-[26px]">{title}</h3>
				<p className="m-0 text-sm text-white/85">{text}</p>
			</div>
		</article>
	);
}

export default function UseItFor() {
	return (
		<section id="explore" className="container-x flex flex-col gap-8 pb-24">
			<Header />
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{EXPERIENCES.map((e) => <Tile key={e.title} {...e} />)}
			</div>
		</section>
	);
}
