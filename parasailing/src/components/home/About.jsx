const ITEMS = [
	{ icon: "/images/about/age.webp", label: "5+ Years old Can Parasail" },
	{
		icon: "/images/about/height.webp",
		label: "1200 Foot Flights FAA Approved",
	},
	{ icon: "/images/about/experience.webp", label: "No Experience Required" },
	{ icon: "/images/about/rated.webp", label: "#1 Rated By Customers" },
	{ icon: "/images/about/safety.webp", label: "Perfect Safety Record" },
];

// The icons are blue badges with white glyphs (not the white-on-transparent PNGs the
// inventory assumed), so they are shown unfiltered; only the circle changes on hover.
export function ImageBox({ icon, label }) {
	return (
		<div className="group flex flex-col items-center gap-6 text-center">
			<span className="grid size-[210px] place-items-center rounded-full bg-white shadow-[0_0_25px_rgba(0,0,0,0.08)] transition-colors group-hover:bg-orange">
				<img
					src={icon}
					alt=""
					width="95"
					height="89"
					loading="lazy"
					className="block h-auto w-[90px]"
				/>
			</span>
			<span className="max-w-[170px] text-[22px] font-semibold leading-tight text-[#191919]">
				{label}
			</span>
		</div>
	);
}

export default function About() {
	return (
		<section className="bg-[#f9f9f9] py-[140px]">
			<div className="container-x">
				<div className="px-[10px]">
					<p className="kicker m-0">About</p>
					<h2 className="display-blue m-0 mt-2.5">Englewood Parasailing</h2>
				</div>
				<div className="mt-14 grid grid-cols-2 gap-x-2 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
					{ITEMS.map((item) => (
						<ImageBox key={item.label} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
