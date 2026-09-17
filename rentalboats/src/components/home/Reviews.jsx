import { Star } from "lucide-react";
import { RATING, REVIEWS } from "../../data/reviews";

function Stars({ size = 18 }) {
	return (
		<span className="flex gap-0.5 text-sun" aria-label="Five star rating">
			{Array.from({ length: 5 }, (_, i) => <Star key={i} size={size} fill="currentColor" strokeWidth={0} />)}
		</span>
	);
}

export function RatingBadge() {
	return (
		<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
			<Stars size={28} />
			<div className="flex flex-col">
				<span className="font-display text-4xl uppercase leading-none text-navy">{RATING.score} out of 5 Stars</span>
				<span className="text-sm text-muted">Across {RATING.count} Florida adventurers · Google reviews</span>
			</div>
		</div>
	);
}

export function Quotes() {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-5">
			{REVIEWS.map((r) => (
				<blockquote key={r.who} className="card m-0 flex flex-col gap-3 p-6">
					<Stars size={14} />
					<p className="m-0 grow text-[17px] leading-relaxed">“{r.text}”</p>
					<footer className="text-sm text-muted"><strong className="text-navy">{r.who}</strong> · Google review</footer>
				</blockquote>
			))}
		</div>
	);
}

export default function Reviews() {
	return (
		<section id="reviews" className="container-x flex flex-col gap-8 pb-24">
			<RatingBadge />
			<Quotes />
		</section>
	);
}
