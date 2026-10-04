import { useState } from "react";
import { useParams } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { GALLERIES } from "../data/boats";
import GetInTouch from "../components/GetInTouch";
import Lightbox from "../components/Lightbox";
import ShapeDivider from "../components/ShapeDivider";
import NotFound from "./NotFound";

export function GalleryGrid({ images, onOpen }) {
	return (
		<section className="relative pb-[37px]">
			<div
				aria-hidden="true"
				className="absolute inset-0 bg-[url(/images/bg/gallery.webp)] bg-cover bg-center opacity-[0.36]"
			/>
			<ShapeDivider shape="waves" position="top" />
			<ShapeDivider shape="waves" position="bottom" />
			<div className="container-x relative z-[2]">
				<div className="grid grid-cols-1 gap-[37px] md:grid-cols-2">
					{images.map((img, i) => (
						<button
							key={img.src}
							type="button"
							onClick={() => onOpen(i)}
							aria-label={`Open ${img.caption}`}
							className="block cursor-pointer"
						>
							<img
								src={img.thumb}
								alt={img.caption}
								width="800"
								height="533"
								loading="lazy"
								className="block w-full border-[3px] border-white"
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
}

function GalleryPage({ slug, title, pageTitle, images }) {
	usePageMeta({
		title: `${pageTitle} - Englewood Rental Boats`,
		description: `${title}: photos of the boat you can rent at 1450 Beach Rd, Englewood.`,
	});
	const [index, setIndex] = useState(-1);
	const open = index >= 0;
	const total = images.length;
	const prev = () => setIndex((i) => (i - 1 + total) % total);
	const next = () => setIndex((i) => (i + 1) % total);

	return (
		<>
			<div className="container-x pt-[175px]">
				<h2 className="m-0 text-[35px] leading-none">{title}</h2>
				<div className="py-[15px]">
					<span className="block w-[41%] border-t-[1.8px] border-divider" />
				</div>
			</div>
			<GalleryGrid key={slug} images={images} onOpen={setIndex} />
			<Lightbox
				open={open}
				onClose={() => setIndex(-1)}
				onPrev={prev}
				onNext={next}
				label={title}
			>
				{open && (
					<figure className="m-0 flex max-h-full max-w-full flex-col items-center gap-3">
						<img
							src={images[index].src}
							alt={images[index].caption}
							className="max-h-[80dvh] max-w-full object-contain"
						/>
						<figcaption className="text-center text-sm text-white">
							{images[index].caption}
							<span className="mt-1 block text-white/70">
								{index + 1} / {total}
							</span>
						</figcaption>
					</figure>
				)}
			</Lightbox>
			<GetInTouch />
		</>
	);
}

export default function Gallery() {
	const { slug } = useParams();
	const gallery = GALLERIES[slug];
	if (!gallery) return <NotFound />;
	return <GalleryPage key={slug} slug={slug} {...gallery} />;
}
