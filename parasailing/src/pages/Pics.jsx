import { useCallback, useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import { GALLERY } from "../data/gallery";
import Lightbox from "../components/Lightbox";
import BookButton from "../components/BookButton";

export function Header() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow">Awesome</span>
			<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">Parasail pics</h1>
			<p className="m-0 max-w-[52ch] text-lg text-ink-2">
				Views from 1,200 feet over Englewood, Manasota Key and the Gulf. Pic and video packages are available to purchase for your flight.
			</p>
		</div>
	);
}

export function Grid() {
	const [index, setIndex] = useState(-1);
	const open = index >= 0;
	const prev = useCallback(() => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length), []);
	const next = useCallback(() => setIndex((i) => (i + 1) % GALLERY.length), []);
	const close = useCallback(() => setIndex(-1), []);
	const current = GALLERY[index];

	return (
		<>
			<ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,240px),1fr))] gap-4 p-0">
				{GALLERY.map((g, i) => (
					<li key={g.src}>
						<button
							type="button"
							onClick={() => setIndex(i)}
							className="block aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-2xl bg-canvas-2"
							aria-label={`Open photo: ${g.alt}`}
						>
							<img src={g.src} alt={g.alt} loading="lazy" className="photo size-full object-cover transition-transform duration-300 hover:scale-105" />
						</button>
					</li>
				))}
			</ul>
			<Lightbox open={open} onClose={close} onPrev={prev} onNext={next} label="Photo viewer">
				{current && <img src={current.src} alt={current.alt} className="max-h-full max-w-full rounded-2xl object-contain" />}
			</Lightbox>
		</>
	);
}

export function Cta() {
	return (
		<div className="flex flex-col items-start gap-5 rounded-3xl bg-gradient-to-br from-sky to-sky-deep px-[clamp(24px,4vw,56px)] py-12 text-white">
			<h2 className="m-0 text-[clamp(30px,3.4vw,46px)]">Ready to fly in the clouds?</h2>
			<BookButton>Book a flight</BookButton>
		</div>
	);
}

export default function Pics() {
	usePageMeta({
		title: "Pics — Englewood Parasailing",
		description: "Photos from parasailing flights over Englewood Beach and Manasota Key, Florida. Photo and video packages available for your flight.",
	});
	return (
		<div className="flex flex-col gap-16 pt-12 pb-24">
			<section className="container-x"><Header /></section>
			<section className="container-x"><Grid /></section>
			<section className="container-x"><Cta /></section>
		</div>
	);
}
