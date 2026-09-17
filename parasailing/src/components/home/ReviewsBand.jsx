import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { RATINGS, REVIEWS } from "../../data/reviews";

const FEATURED = REVIEWS.filter((r) => r.featured);
const TOTAL_ROUNDED = `${(Math.floor(RATINGS.total / 100) * 100).toLocaleString()}+`;

export function Stars({ size = 18 }) {
	return (
		<span className="flex gap-0.5 text-yellow" aria-label="Five star rating">
			{Array.from({ length: 5 }, (_, i) => (
				<Star key={i} size={size} fill="currentColor" strokeWidth={0} />
			))}
		</span>
	);
}

export function Summary() {
	return (
		<div className="flex flex-col gap-5 text-white">
			<span className="eyebrow text-yellow">Verified reviews</span>
			<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
				<span className="font-display text-[clamp(80px,9vw,128px)] font-extrabold leading-[0.85]">{RATINGS.average}</span>
				<div className="flex flex-col gap-1.5">
					<Stars size={26} />
					<span className="font-display text-2xl font-bold uppercase leading-none">Stars across {TOTAL_ROUNDED} reviews</span>
					<span className="text-sm text-white/80">on {RATINGS.platforms.map((p) => p.name).join(", ")}</span>
				</div>
			</div>
			<h2 className="m-0 text-[clamp(30px,3.4vw,46px)]">First-timers, grandparents and kids as young as five — all grinning on the way down.</h2>
			<Link to="/reviews" className="btn btn-primary self-start">
				<span>Read all reviews</span>
			</Link>
		</div>
	);
}

export function Quotes() {
	return (
		<ul className="m-0 grid list-none gap-4 p-0">
			{FEATURED.map((r) => (
				<li key={r.author} className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-navy shadow-[0_20px_40px_-24px_rgba(7,26,48,0.6)]">
					<div className="flex flex-wrap items-center justify-between gap-3">
						<Stars size={14} />
						<span className="chip">{r.featured}</span>
					</div>
					<p className="m-0 text-[15px] leading-relaxed text-ink-2">“{r.text}”</p>
					<span className="text-[13px] text-ink-3">
						<strong className="text-navy">{r.author}</strong> · {r.platform} · {r.when}
					</span>
				</li>
			))}
		</ul>
	);
}

export default function ReviewsBand() {
	return (
		<section id="reviews" className="section-pad bg-gradient-to-br from-sky to-sky-deep">
			<div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-x-[clamp(28px,5vw,72px)] gap-y-10">
				<Summary />
				<Quotes />
			</div>
		</section>
	);
}
