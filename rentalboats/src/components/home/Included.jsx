const ITEMS = [
	{ title: "Inspected, well-kept boats", text: "Every hull is safety-checked before it leaves the dock. Trouble-free day, guaranteed." },
	{ title: "All the USCG safety gear", text: "Life jackets for everyone, horn, fire extinguisher — already aboard." },
	{ title: "A quick dock briefing", text: "Channel markers, the good sandbars, where the dolphins hang out. Then it's all yours." },
];

export default function Included() {
	return (
		<section className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[clamp(28px,5vw,80px)] gap-y-12 pb-24">
			<figure className="m-0 aspect-[5/4] overflow-hidden rounded-3xl bg-teal-50 shadow-lift">
				<img src="/images/fleet/family.webp" alt="Family relaxing on a rental boat" width="800" height="533" loading="lazy" className="photo size-full object-cover" />
			</figure>
			<div className="flex flex-col gap-6">
				<span className="eyebrow">Every rental includes</span>
				<h2 className="display m-0">We handle the boring parts. You handle the throttle.</h2>
				<ol className="m-0 flex list-none flex-col gap-4.5 p-0">
					{ITEMS.map((it, i) => (
						<li key={it.title} className="flex items-start gap-4">
							<span className="grid size-10 flex-none place-items-center rounded-xl bg-teal font-display text-xl text-white">{i + 1}</span>
							<div className="flex flex-col gap-1">
								<strong className="text-[17px]">{it.title}</strong>
								<span className="text-[15px] text-muted">{it.text}</span>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
