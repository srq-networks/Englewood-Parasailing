import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "../data/site";

// 55px navy strip above the menu bar. Stacks and centres below lg.
export default function TopBar() {
	return (
		<div className="relative z-20 bg-navy/90 text-[17px] text-white">
			<div className="container-x flex flex-col items-center gap-1 py-3 text-center lg:min-h-[55px] lg:flex-row lg:justify-between lg:py-0 lg:text-left">
				<a
					href={PHONE_HREF}
					className="inline-flex items-center gap-2.5 no-underline"
				>
					<Phone
						size={16}
						fill="currentColor"
						strokeWidth={0}
						aria-hidden="true"
					/>
					Call NOW! {PHONE_DISPLAY}
				</a>
				<span className="uppercase">Englewood's #1 Rated Parasail Company</span>
			</div>
		</div>
	);
}
