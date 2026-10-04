import { useCallback, useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { GALLERY } from "../data/gallery";
import PageHero from "../components/PageHero";
import Lightbox from "../components/Lightbox";

// Four 250×167 thumbnails per row with no gaps, opening a prev/next lightbox.
export function Grid() {
	const [index, setIndex] = useState(-1);
	const open = index >= 0;
	const prev = useCallback(
		() => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length),
		[],
	);
	const next = useCallback(() => setIndex((i) => (i + 1) % GALLERY.length), []);
	const close = useCallback(() => setIndex(-1), []);
	const current = GALLERY[index];

	return (
		<>
			<ul className="m-0 grid max-w-[1000px] list-none grid-cols-2 p-0 md:grid-cols-4">
				{GALLERY.map((g, i) => (
					<li key={g.src}>
						<button
							type="button"
							onClick={() => setIndex(i)}
							className="block w-full cursor-pointer"
							aria-label={`Open photo: ${g.alt}`}
						>
							<img
								src={g.thumb}
								alt={g.alt}
								width="250"
								height="167"
								loading="lazy"
								className="block aspect-[250/167] w-full object-cover"
							/>
						</button>
					</li>
				))}
			</ul>
			<Lightbox
				open={open}
				onClose={close}
				onPrev={prev}
				onNext={next}
				label="Photo viewer"
			>
				{current && (
					<img
						src={current.src}
						alt={current.alt}
						className="max-h-full max-w-full object-contain"
					/>
				)}
			</Lightbox>
		</>
	);
}

export default function Pics() {
	usePageMeta({
		title: "Pics – Englewood Parasailing",
		description:
			"Photos from parasailing flights over Englewood Beach and Manasota Key, Florida. Pic and video packages are available to purchase for your flight.",
	});
	return (
		<>
			<PageHero
				kicker="Awesome"
				title="Parasail Pics"
				bg="/images/bg/back.webp"
				heading="Ready to Fly In The Clouds?"
			>
				<p className="m-0 px-[10px] pt-5 pb-[30px] font-el text-[20px] leading-[30px] text-muted md:text-[22px]">
					Pic and video packages are available to purchase for your flight.
					Memories to last a lifetime are created on our boats!
				</p>
			</PageHero>
			<section className="bg-light-2 py-[10px]">
				<div className="container-x px-[25px]">
					<Grid />
				</div>
			</section>
		</>
	);
}
