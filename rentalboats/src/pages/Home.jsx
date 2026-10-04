import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/home/Hero";
import BoatTypes from "../components/home/BoatTypes";
import UseOurBoats from "../components/home/UseOurBoats";
import BookParallax from "../components/home/BookParallax";
import RentalsInclude from "../components/home/RentalsInclude";
import Testimonials from "../components/home/Testimonials";
import SomeoneElse from "../components/home/SomeoneElse";
import ParasailPromo from "../components/home/ParasailPromo";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
	usePageMeta({
		title: "Home - Englewood Rental Boats",
		description:
			"Affordable pontoon, center console, deck boat and skiff rentals at 1450 Beach Rd, Englewood, FL. Open 7 days, 8AM to 6PM. Call 941-475-0733 or book online.",
	});
	return (
		<>
			<Hero />
			<BoatTypes />
			<UseOurBoats />
			<BookParallax />
			<RentalsInclude />
			<Testimonials />
			{/* Empty 60px-padded section on the live page, kept as spacing. */}
			<div aria-hidden="true" className="py-[60px]" />
			<SomeoneElse />
			<ParasailPromo />
			<GetInTouch />
		</>
	);
}
