import { FAREHARBOR } from "../data/site";

// Native replacement for the old Buttonizer "Book Now" button: fixed top-right on desktop,
// right edge at 30% down on mobile. Opens the FareHarbor lightbox.
export default function BookNowFloat() {
	return (
		<a
			href={FAREHARBOR.book}
			className="fixed top-[30%] right-[5px] z-40 flex h-[42px] items-center rounded-[10px] bg-book px-5 text-[12px] text-white no-underline shadow-[0_2px_6px_1px_rgba(0,0,0,0.2)] transition-colors hover:bg-black lg:top-[10px] lg:right-[1px] lg:uppercase"
		>
			<span>Book Now</span>
		</a>
	);
}
