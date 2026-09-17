import { Link } from "react-router-dom";

const PHOTOS = [
	{ src: "/images/home/img_0019.webp", alt: "Parasail canopy over the Gulf" },
	{ src: "/images/home/img_7337.webp", alt: "Manasota Key from 1,200 feet" },
	{ src: "/images/gallery/img_7390.webp", alt: "Englewood Beach and the Gulf from the parasail" },
];

export default function GalleryTeaser() {
	return (
		<section id="gallery" className="container-x flex flex-col gap-7 pb-[clamp(56px,7vw,104px)]">
			<div className="flex flex-wrap items-end justify-between gap-5">
				<div className="flex flex-col gap-3">
					<span className="eyebrow">The view from the top</span>
					<h2 className="display m-0">Gallery</h2>
					<p className="m-0 max-w-[44ch] text-lg text-ink-2">Englewood Beach, Manasota Key and the open Gulf, seen the way only our riders see them.</p>
				</div>
				<Link to="/pics" className="btn btn-secondary btn-sm">
					<span>View gallery</span>
				</Link>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
				{PHOTOS.map((p) => (
					<figure key={p.src} className="m-0 aspect-[3/2] overflow-hidden rounded-2xl bg-canvas-2">
						<img src={p.src} alt={p.alt} width="1024" height="683" loading="lazy" className="photo size-full object-cover transition-transform duration-500 hover:scale-105" />
					</figure>
				))}
			</div>
		</section>
	);
}
