import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/home/Hero";
import TrustBar from "../components/home/TrustBar";
import Thrills from "../components/home/Thrills";
import PricingSection from "../components/home/PricingSection";
import Availability from "../components/home/Availability";
import GalleryTeaser from "../components/home/GalleryTeaser";
import ReviewsBand from "../components/home/ReviewsBand";
import BigCta from "../components/home/BigCta";
import Contact from "../components/home/Contact";

export default function Home() {
	usePageMeta({
		title: "Englewood Parasailing — Soar 1,200 ft Above the Gulf | Englewood, FL",
		description:
			"Parasail 1,200 ft over the Gulf of Mexico in Englewood, Florida with the area's original, only full-time parasail team. Single, tandem and triple flights, ages 5 to 105, dry deck takeoff and landing. Call 833-359-1200.",
	});
	// The pricing cards can pre-select the flight in the request form.
	const [flight, setFlight] = useState("bigair");

	return (
		<>
			<Hero />
			<TrustBar />
			<Thrills />
			<PricingSection onPick={setFlight} />
			<Availability />
			<GalleryTeaser />
			<ReviewsBand />
			<BigCta />
			<Contact flight={flight} onFlightChange={setFlight} />
		</>
	);
}
