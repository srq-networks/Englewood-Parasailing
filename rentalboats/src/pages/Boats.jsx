import { CalendarDays } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { BOATS, GRATUITY_NOTE } from "../data/boats";
import { FAREHARBOR, PHONE_DISPLAY } from "../data/site";
import GetInTouch from "../components/GetInTouch";
import ShapeDivider from "../components/ShapeDivider";

export function BoatCard({ title, image, bullets, rates, href, bookLabel }) {
	return (
		<article className="flex flex-col bg-card md:flex-row md:items-start">
			<a href={href} className="block shrink-0 md:mr-[15px] md:w-[40.6%]">
				<img
					src={image}
					alt={title}
					width="1000"
					height="667"
					loading="lazy"
					className="block w-full"
				/>
			</a>
			<div className="p-[15px] md:px-0 md:pt-[6px]">
				<h1 className="m-0 text-[23px] leading-none">
					<a href={href} className="text-heading hover:text-hover">
						{title}
					</a>
				</h1>
				<ul className="my-[10px] list-disc pl-5">
					{bullets.map((b) => (
						<li key={b}>{b}</li>
					))}
				</ul>
				<p className="m-0">
					<strong>Rental Rates:</strong>
					{rates.map((r) => (
						<span key={r} className="block">
							{r}
						</span>
					))}
					<a href={href}>{bookLabel}</a>
					<span className="block">{GRATUITY_NOTE}</span>
				</p>
			</div>
		</article>
	);
}

export function BookingCta() {
	return (
		<section className="relative bg-white py-[48px]">
			<ShapeDivider shape="waves" position="top" height={106} />
			<div className="relative z-[2] mx-auto flex max-w-[88%] flex-col items-start gap-5 bg-navy-cta p-[30px] text-white md:flex-row md:items-center">
				<CalendarDays size={80} aria-hidden="true" className="shrink-0" />
				<div className="grow">
					<h2 className="m-0 mb-[10px] text-[36px] leading-none text-white capitalize">
						Ready to Book Your Next Adventure?
					</h2>
					<p className="m-0 text-base">
						Booking is fast and easy. Simply use the online booking tool or feel
						free to call in a reservation {PHONE_DISPLAY}! We are here to help
						make your day on the water a great experience!
					</p>
				</div>
				<a
					href={FAREHARBOR.book}
					className="shrink-0 bg-[#F9F9F9] px-[30px] pt-3 pb-4 text-base leading-none text-[#4D4D4D] hover:bg-[#3F51B5] hover:text-[#F9F9F9]"
				>
					<span>Book Now!</span>
				</a>
			</div>
		</section>
	);
}

export default function Boats() {
	usePageMeta({
		title: "Our Rental Boats - Englewood Rental Boats",
		description:
			"Rent a Sun Catcher or Aloha pontoon, Scout center console, Bayliner deck boat or Key West skiff in Englewood, FL. 4, 6 and 8 hour rates. Book online or call 941-475-0733.",
	});
	return (
		<div className="bg-[#FFFFFFE8] bg-[url(/images/bg/pelican-mobile.webp)] bg-contain bg-top bg-no-repeat bg-blend-overlay lg:bg-fixed lg:bg-[url(/images/bg/pelican.webp)] lg:bg-left">
			<div className="container-x pt-[150px]">
				<h2 className="m-0 text-[52px] leading-none text-title [-webkit-text-stroke:1px_white] [text-shadow:2px_0_0_rgba(0,0,0,0.3)]">
					Our Rental Boats
				</h2>
				<div className="mt-5 flex flex-col gap-[10px]">
					{BOATS.map((boat) => (
						<BoatCard key={boat.id} {...boat} />
					))}
				</div>
			</div>
			<BookingCta />
			<GetInTouch />
		</div>
	);
}
