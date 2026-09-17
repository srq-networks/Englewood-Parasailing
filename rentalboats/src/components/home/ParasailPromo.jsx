import { PARASAIL_URL } from "../../data/site";

export function Copy() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow text-sun">The Ultimate Vacation Day</span>
			<h2 className="display m-0">Want to See the Sandbar from 1,200 Feet?</h2>
			<p className="m-0 max-w-[48ch] text-lg text-white/85">
				Both businesses leave from our private dock at 1450 Beach Rd. Fly over the Gulf in the morning, then step right onto your rental pontoon for an afternoon sandbar picnic.
			</p>
			<a href={PARASAIL_URL} className="btn btn-primary self-start">Check Parasailing Flights</a>
		</div>
	);
}

export function Photo() {
	return (
		<figure className="relative m-0 aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
			<img src="/images/promo/parasailing.webp" alt="Parasail canopy over Englewood Beach" width="668" height="785" loading="lazy" className="photo size-full object-cover" />
			<span className="absolute bottom-4 left-4 rounded-xl bg-white p-2.5 shadow-card">
				<img src="/images/brand/parasailing-logo.webp" alt="Englewood Parasailing" width="600" height="428" loading="lazy" className="block h-12 w-auto" />
			</span>
		</figure>
	);
}

export default function ParasailPromo() {
	return (
		<section className="bg-navy text-white">
			<div className="container-x section-pad grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-x-[clamp(28px,5vw,80px)] gap-y-10">
				<Copy />
				<Photo />
			</div>
		</section>
	);
}
