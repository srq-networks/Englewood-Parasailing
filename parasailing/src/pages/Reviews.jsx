import { Star } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { RATINGS, REVIEWS } from "../data/reviews";
import { ELFSIGHT } from "../data/site";
import ElfsightWidget from "../components/ElfsightWidget";

function Stars({ size = 16 }) {
	return (
		<span className="flex gap-0.5 text-yellow" aria-label="Five stars">
			{Array.from({ length: 5 }, (_, i) => <Star key={i} size={size} fill="currentColor" strokeWidth={0} />)}
		</span>
	);
}

export function Header() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow">Our rave reviews</span>
			<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">From our customers</h1>
			<p className="m-0 max-w-[52ch] text-lg text-ink-2">Read all about what our customers have to say about their parasail experience.</p>
		</div>
	);
}

export function Summary() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
			<div className="card flex flex-col gap-2 border-t-4 border-t-yellow p-6">
				<span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-3">All reviews</span>
				<span className="font-display text-5xl font-extrabold leading-none">{RATINGS.average}</span>
				<Stars />
				<span className="text-[13px] text-ink-3">Based on {RATINGS.total.toLocaleString()} reviews</span>
			</div>
			{RATINGS.platforms.map((p) => (
				<a key={p.name} href={p.href} target="_blank" rel="noopener" className="card flex flex-col gap-2 border-t-4 border-t-sky p-6 no-underline transition-colors hover:bg-canvas">
					<span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-3">{p.name}</span>
					<span className="font-display text-5xl font-extrabold leading-none text-navy">{p.score}</span>
					<Stars />
					<span className="text-[13px] font-bold uppercase tracking-[0.04em] text-sky-deep">Read on {p.name}</span>
				</a>
			))}
		</div>
	);
}

export function Grid() {
	return (
		<div className="columns-[280px] gap-4">
			{REVIEWS.map((r) => (
				<blockquote key={r.author + r.when} className="card mb-4 flex break-inside-avoid flex-col gap-3 p-6">
					<div className="flex items-center justify-between gap-3">
						<Stars size={14} />
						{r.platform && <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-ink-3">{r.platform}</span>}
					</div>
					{r.title && <span className="font-display text-xl font-bold uppercase leading-none">{r.title}</span>}
					<p className="m-0 text-[15px] text-ink-2">{r.text}</p>
					<footer className="text-[13px] text-ink-3">
						<span className="font-bold text-navy">{r.author}</span> · {r.when}
					</footer>
				</blockquote>
			))}
		</div>
	);
}

export function LiveFeed() {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-3">
				<span className="eyebrow">Live feed</span>
				<h2 className="display m-0">All 1,255 and counting</h2>
			</div>
			<div className="card p-4">
				<ElfsightWidget id={ELFSIGHT.reviews} />
			</div>
		</div>
	);
}

export default function Reviews() {
	usePageMeta({
		title: "Reviews — Englewood Parasailing",
		description:
			"Over 1,200 five-star reviews on Tripadvisor, Facebook and Google. See what customers say about parasailing with Englewood Parasailing.",
	});
	return (
		<div className="flex flex-col gap-16 pt-12 pb-24">
			<section className="container-x"><Header /></section>
			<section className="container-x"><Summary /></section>
			<section className="container-x"><Grid /></section>
			<section className="container-x"><LiveFeed /></section>
		</div>
	);
}
