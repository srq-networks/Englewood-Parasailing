import { FAREHARBOR } from "../../data/site";
import BookButton from "../BookButton";

// FareHarbor's availability calendar, as on the previous home page.
export default function Availability() {
	return (
		<section id="availability" className="container-x section-pad flex flex-col gap-7">
			<div className="flex flex-wrap items-end justify-between gap-5">
				<div className="flex flex-col gap-3">
					<span className="eyebrow">Live availability</span>
					<h2 className="display m-0">Pick a day. We'll pick you up.</h2>
					<p className="m-0 max-w-[44ch] text-lg text-ink-2">Live openings straight from our booking calendar. Tap a date to reserve online in about a minute.</p>
				</div>
				<BookButton>Book online</BookButton>
			</div>
			<div className="card overflow-hidden p-2">
				<iframe
					src={FAREHARBOR.calendar}
					title="Englewood Parasailing booking calendar"
					loading="lazy"
					className="block h-[640px] w-full rounded-xl bg-white"
				/>
			</div>
		</section>
	);
}
