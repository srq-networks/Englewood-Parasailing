import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";
import { PHONE_VANITY, YOUTUBE } from "../data/site";
import PageHero from "../components/PageHero";
import SoundButton from "../components/SoundButton";
import FareHarborCalendar from "../components/FareHarborCalendar";

const h3 = "m-0 font-display text-[38px] font-bold leading-tight text-dropdown";
const body =
	"m-0 mt-4 font-el text-[20px] leading-[30px] text-muted md:text-[22px]";

export function Highlight() {
	return (
		<section className="bg-[#f9f8f8]">
			<div className="container-x grid min-h-[400px] md:grid-cols-2">
				<div className="min-h-[300px] bg-[url(/images/parasailing/pic-10.webp)] bg-cover bg-center md:min-h-0" />
				<div className="px-[10px] py-[30px] md:pl-[30px]">
					<h3 className={h3}>
						Parasailing with Englewood Parasailing will be the ”Highlight” of
						your trip.
					</h3>
					<p className={body}>
						The crystal clear waters off of Englewood will be the starting point
						for your aerial adventure, culminating in an unbelievable view high
						above the tranquil waters of Manasota Key. You will float
						effortlessly from our parasail canopy as you soar along with the
						gulls and frigates, peering down into the water, perhaps spotting
						some of our resident dolphins and manatees. From your lofty perch,
						you will be able to take in the fabulous view of Englewood Beach,
						Boca Grande and Manasota Key. The Intracoastal Waterway meanders
						throughout this backdrop, providing you with an unparalleled visual
						experience.
					</p>
					<SoundButton
						youtubeId={YOUTUBE.popup}
						className="mx-auto mt-6 animate-bounce-in"
					/>
				</div>
			</div>
		</section>
	);
}

export function BookBand() {
	return (
		<section className="relative mt-[75px] bg-[url(/images/bg/dji_0018.webp)] bg-cover bg-center lg:bg-fixed">
			<div aria-hidden="true" className="absolute inset-0 bg-band/50" />
			<div className="container-x relative grid items-center gap-6 py-[10px] md:grid-cols-2">
				<div className="px-[10px] font-el text-[45px] font-semibold leading-none text-white lg:text-[81px]">
					<p className="m-0">BOOK NOW!</p>
					<p className="m-0 mt-5">{PHONE_VANITY}</p>
				</div>
				<div className="px-[10px]">
					<FareHarborCalendar className="h-[434px]" />
				</div>
			</div>
		</section>
	);
}

export function HowItWorks() {
	return (
		<section className="grid md:grid-cols-2">
			<div className="p-[10px] text-center">
				<h2 className="m-0 mt-[60px] font-el text-[45px] font-semibold leading-none text-royal-2 lg:text-[54px]">
					Never Parasailing Before?
				</h2>
				<p className="m-0 mt-8 font-el text-[22px] leading-[30px] font-bold text-muted">
					Our experienced and friendly crew will help you and ensure you have an
					amazing time.
				</p>
				<div className="mt-8 px-5 pb-10 lg:px-[150px]">
					<iframe
						src={`https://www.youtube-nocookie.com/embed/${YOUTUBE.howItWorks}?rel=0`}
						title="Englewood Parasailing – full throttle"
						loading="lazy"
						allow="encrypted-media; fullscreen"
						className="aspect-video w-full border-0 bg-black"
					/>
				</div>
			</div>
			<div className="bg-tint/8 p-[30px] lg:p-[50px]">
				<h3 className={h3}>How it works:</h3>
				<p className={body}>
					Englewood Beach Parasailing utilizes the newest technology and systems
					to provide anyone with a safe, soft, controlled parasailing
					experience. Our state of the art vessel is built solely for your
					parasailing enjoyment. Up to 12 people can go out on the boat for the
					excursion. You and up to two of your friends or family members can
					ride in the parasail together and share the moment–from a seated
					position on the back deck you will feel the boat pull away as you
					almost imperceptibly lift up into the air. The Kevlar towline is
					reeled out from a winch so smoothly that it feels as if the boat
					simply leaves you while your view becomes increasingly more beautiful
					as you climb higher and higher, leaving the gravity-bound world below.
				</p>
			</div>
		</section>
	);
}

export function MoreAdventure() {
	return (
		<section className="grid md:grid-cols-2">
			<div className="bg-tint/8 p-[30px] lg:p-[100px]">
				<h3 className={h3}>Want Even More Adventure?</h3>
				<p className={body}>
					For the more adventurous, we can provide an incredible experience we
					call a ”free fall” where the captain slows the boat and lets you float
					down with the parachute until you almost touch the water, then he hits
					the throttle and up you come again! Of course, we can add a little
					“splash” as well, for those of you who prefer to cool off before
					returning to the deck. Everyone lands softly back onto the deck as the
					captain reels the line back in, compelling the parachute to return to
					the boat every time. By the way, our captains are US Coast Guard
					certified and have years of parasailing experience.
				</p>
				<div className="mt-8 text-center">
					<Link to="/pricing" className="btn btn-xl bg-[#ff0313]">
						<span>Pricing</span>
					</Link>
				</div>
			</div>
			<div className="order-first min-h-[320px] bg-[url(/images/parasailing/about.webp)] bg-cover bg-center md:order-none md:min-h-0" />
		</section>
	);
}

export function Boat() {
	return (
		<section className="mt-[50px] grid bg-band md:grid-cols-2">
			<img
				src="/images/parasailing/boat.webp"
				alt="Englewood Parasailing's 2023 Ocean Pro parasail boat"
				width="1033"
				height="592"
				loading="lazy"
				className="block h-auto w-full p-[10px]"
			/>
			<div className="flex flex-col items-center justify-center gap-5 px-[30px] py-[40px] text-center lg:px-[110px]">
				<img
					src="/images/about/safety.webp"
					alt=""
					width="90"
					height="85"
					loading="lazy"
					className="block"
				/>
				<h2 className="m-0 font-el text-[37px] font-semibold leading-none text-white">
					Our New State of the Art 2023 Ocean Pro Parasail Boat! Seats up to 12
					People...
				</h2>
			</div>
		</section>
	);
}

export default function Parasailing() {
	usePageMeta({
		title: "Parasailing – Englewood Parasailing",
		description:
			"Parasailing with Englewood Parasailing will be the highlight of your trip: a 2023 Ocean Pro boat, US Coast Guard certified captains, up to three riders together and an optional free fall. Call 833-FLY-1200.",
	});
	return (
		<>
			<PageHero
				kicker="Time to go"
				title="Parasailing"
				youtubeId={YOUTUBE.hero}
				heading="Englewood's #1 Parasail Company"
			/>
			<Highlight />
			<BookBand />
			<HowItWorks />
			<MoreAdventure />
			<Boat />
		</>
	);
}
