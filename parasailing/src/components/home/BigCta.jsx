import { ArrowUpRight } from "lucide-react";
import { ADDRESS, RENTALS_URL } from "../../data/site";
import BookButton from "../BookButton";

// Sister-business cross-sell: the rental boats leave from the same dock.
export function Copy() {
	return (
		<div className="flex flex-col gap-5 text-white">
			<span className="eyebrow text-yellow">Same dock · {ADDRESS.street}</span>
			<h2 className="m-0 text-[clamp(38px,5vw,72px)]">Make it the ultimate Englewood day on the water</h2>
			<p className="m-0 max-w-[54ch] text-lg text-white/85">
				Fly 1,200 feet in the morning with Englewood Parasailing, then walk 20 feet down the dock and captain your own pontoon boat to the sandbars with Englewood Rental Boats.
			</p>
			<div className="flex flex-wrap gap-3">
				<BookButton>Book your flight</BookButton>
				<a href={RENTALS_URL} className="btn btn-light">
					<span>Rent a boat <ArrowUpRight size={20} /></span>
				</a>
			</div>
		</div>
	);
}

export function RentalsCard() {
	return (
		<a href={RENTALS_URL} className="card flex flex-col items-center gap-4 p-8 text-center no-underline transition-transform hover:-translate-y-1 lg:justify-self-end">
			<img src="/images/brand/rentalboats-logo.webp" alt="Englewood Rental Boats" width="400" height="293" className="block w-[min(100%,260px)]" />
			<span className="font-display text-2xl font-bold uppercase leading-none text-navy">englewoodrentalboats.com</span>
			<span className="text-sm text-ink-2">Captain your own boat from the same dock</span>
		</a>
	);
}

export default function BigCta() {
	return (
		<section id="dock" className="section-pad bg-navy">
			<div className="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-center gap-x-[clamp(28px,5vw,72px)] gap-y-10">
				<Copy />
				<RentalsCard />
			</div>
		</section>
	);
}
