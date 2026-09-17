import { Phone, Zap } from "lucide-react";
import { PHONE_HREF } from "../data/site";
import useBooking from "../hooks/useBooking";

// Mobile-only call / book bar pinned to the bottom of the screen.
export default function StickyBookingBar() {
	const { open } = useBooking();
	return (
		<div className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
			<a href={PHONE_HREF} className="btn btn-secondary btn-sm flex-1"><Phone size={16} /> Call Direct</a>
			<button type="button" onClick={() => open()} className="btn btn-coral btn-sm flex-1"><Zap size={16} /> Book Online</button>
		</div>
	);
}
