import { CalendarDays, Map, Phone } from "lucide-react";
import { ADDRESS, ELFSIGHT, HOURS, PHONE_DISPLAY, YOUTUBE } from "../data/site";
import ElfsightWidget from "./ElfsightWidget";
import ShapeDivider from "./ShapeDivider";
import YouTubeBackground from "./YouTubeBackground";

export function IconBox({ Icon, title, lines }) {
	return (
		<div className="text-center text-white">
			<span className="inline-grid size-16 place-items-center rounded-full bg-circle p-4 text-circle-icon">
				<Icon size={32} aria-hidden="true" />
			</span>
			<h3 className="mt-5 mb-2 text-base text-white uppercase">{title}</h3>
			<p className="m-0">
				{lines.map((line) => (
					<span key={line} className="block">
						{line}
					</span>
				))}
			</p>
		</div>
	);
}

// Closing band on every page except Contact: YouTube water video (poster on mobile) under a
// blue overlay, wave-brush divider, three icon boxes and the Elfsight weather widget.
export default function GetInTouch() {
	return (
		<section className="relative mt-[50px] pt-[200px] pb-[30px]">
			<YouTubeBackground
				id={YOUTUBE.touch}
				poster="/images/bg/get-in-touch.webp"
			/>
			<div aria-hidden="true" className="absolute inset-0 bg-[#004FB4]/50" />
			<ShapeDivider shape="wave-brush" position="top" />
			<div className="container-x relative z-[2] text-center text-white">
				<h2 className="m-0 text-[26px] leading-none font-light text-white md:text-[59px]">
					Get In Touch
				</h2>
				<div className="py-[15px]">
					<span className="mx-auto block w-[5%] border-t-[3px] border-[rgba(0,0,0,0.6)]" />
				</div>
				<h2 className="m-0 text-[27px] leading-none text-white">
					Everybody Needs some Vitamin SEA in Their Life.
				</h2>
				<div className="mt-14 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-4">
					<IconBox Icon={Map} title="Address" lines={[ADDRESS]} />
					<IconBox Icon={Phone} title="Phone" lines={[PHONE_DISPLAY]} />
					<IconBox Icon={CalendarDays} title="Business Hours" lines={HOURS} />
					<ElfsightWidget id={ELFSIGHT.weather} className="min-h-[120px]" />
				</div>
			</div>
		</section>
	);
}
