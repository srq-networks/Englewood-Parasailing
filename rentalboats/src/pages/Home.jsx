import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Fleet from "../components/home/Fleet";
import UseItFor from "../components/home/UseItFor";
import Included from "../components/home/Included";
import Reviews from "../components/home/Reviews";
import Book from "../components/home/Book";
import ParasailPromo from "../components/home/ParasailPromo";
import Faq from "../components/home/Faq";

export default function Home() {
	usePageMeta({
		title: "Englewood Rental Boats — Pontoon, Skiff & Center Console Rentals in Englewood, FL",
		description:
			"Rent a pontoon, skiff, deck boat or center console at 1450 Beach Road on Manasota Key. Five boats, 4/6/8-hour rates from $199, fueled up and ready at the dock. Call 941-475-0733.",
	});

	return (
		<>
			<Hero />
			<TrustBar />
			<Fleet />
			<UseItFor />
			<Included />
			<Reviews />
			<Book />
			<ParasailPromo />
			<Faq />
		</>
	);
}
