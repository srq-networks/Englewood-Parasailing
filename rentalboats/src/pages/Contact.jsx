import { CalendarDays, Map, Phone } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { ADDRESS, HOURS, MAP_EMBED, PHONE_DISPLAY } from "../data/site";

export function InfoBox({ Icon, title, text }) {
	return (
		<div className="flex items-start">
			<Icon
				size={32}
				aria-hidden="true"
				className="shrink-0 text-circle-icon"
			/>
			<div className="grow text-center">
				<h3 className="m-0 mb-5 text-base leading-none text-[#292929] uppercase">
					{title}
				</h3>
				<p className="m-0">{text}</p>
			</div>
		</div>
	);
}

export function Info() {
	return (
		<section className="container-x mt-[100px] py-[50px]">
			<div className="grid gap-y-10 md:grid-cols-2">
				<div className="flex flex-col gap-5 p-[10px]">
					<InfoBox Icon={Map} title="Address" text={ADDRESS} />
					<InfoBox Icon={Phone} title="Phone" text={PHONE_DISPLAY} />
					<InfoBox
						Icon={CalendarDays}
						title="Business Hours"
						text={HOURS.join(" ")}
					/>
					<div className="h-[30px]" />
				</div>
				<div className="p-[10px]">
					<img
						src="/images/bg/surf-family.webp"
						alt="Family running out of the surf"
						width="1600"
						height="1067"
						loading="lazy"
						className="block w-full"
					/>
				</div>
			</div>
		</section>
	);
}

export function MapSection() {
	return (
		<section className="pb-[100px]">
			<h2 className="m-0 mb-5 ml-[50px] text-[39px] leading-none">
				Map & Directions
			</h2>
			<iframe
				src={MAP_EMBED}
				title="Map to 1450 Beach Rd, Englewood, FL"
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				className="block h-[380px] w-full border-0"
			/>
		</section>
	);
}

export default function Contact() {
	usePageMeta({
		title: "Contact - Englewood Rental Boats",
		description:
			"Englewood Rental Boats is at 1450 Beach Rd, Englewood, FL 34223. Call 941-475-0733. Open 7 days, 8AM to 6PM, weather permitting.",
	});
	return (
		<>
			<Info />
			<MapSection />
		</>
	);
}
