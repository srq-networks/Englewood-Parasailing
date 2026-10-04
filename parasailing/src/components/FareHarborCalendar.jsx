import { FAREHARBOR } from "../data/site";

// FareHarbor's inline availability calendar (home "Time To Fly!" and the Parasailing
// page's "BOOK NOW!" band).
export default function FareHarborCalendar({ className = "h-[440px]" }) {
	return (
		<iframe
			src={FAREHARBOR.calendar}
			title="Englewood Parasailing booking calendar"
			loading="lazy"
			className={`block w-full border-0 bg-white ${className}`}
		/>
	);
}
