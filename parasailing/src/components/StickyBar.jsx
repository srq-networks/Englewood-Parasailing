import { Phone, Zap } from "lucide-react";
import { PHONE_HREF, PHONE_PAREN } from "../data/site";
import BookButton from "./BookButton";

// Mobile-only call / book bar pinned to the bottom of the screen.
export default function StickyBar() {
	return (
		<div className="fixed inset-x-0 bottom-0 z-30 flex gap-2.5 border-t border-line bg-white/95 p-2.5 backdrop-blur md:hidden">
			<a href={PHONE_HREF} className="btn btn-secondary btn-sm flex-1 px-3 text-[15px]">
				<span><Phone size={18} /> Call {PHONE_PAREN}</span>
			</a>
			<BookButton className="btn btn-primary btn-sm flex-1 px-3 text-[15px]">
				<Zap size={18} fill="currentColor" strokeWidth={0} /> Book flight
			</BookButton>
		</div>
	);
}
