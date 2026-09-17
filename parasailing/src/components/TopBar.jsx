import { HOURS, PHONE_DISPLAY, PHONE_HREF } from "../data/site";

// Navy strip above the nav.
export default function TopBar() {
	return (
		<div className="bg-navy text-[13px] font-bold uppercase tracking-[0.08em] text-white">
			<div className="container-x flex flex-wrap justify-between gap-x-4 gap-y-1 py-2">
				<a href={PHONE_HREF} className="text-yellow no-underline hover:text-yellow-light">
					Call now! {PHONE_DISPLAY}
				</a>
				<span className="hidden text-white/80 sm:inline">{HOURS} · Englewood's #1 rated parasail company</span>
			</div>
		</div>
	);
}
