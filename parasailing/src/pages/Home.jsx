import usePageMeta from "../hooks/usePageMeta";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import GalleryTeaser from "../components/home/GalleryTeaser";
import ReviewsBand from "../components/home/ReviewsBand";
import About from "../components/home/About";
import AdventureCta from "../components/home/AdventureCta";
import TimeToFly from "../components/home/TimeToFly";

export default function Home() {
	usePageMeta({
		title: "Englewood Parasailing – Englewood's #1 Parasailing Company",
		description:
			"Parasail in Englewood, Florida with the area's original, most experienced and only full-time operator. Flights from $89, ages 5 to 105. Call 833-359-1200.",
	});

	return (
		<>
			<Hero />
			<Welcome />
			<GalleryTeaser />
			<ReviewsBand />
			<About />
			<AdventureCta />
			<TimeToFly />
		</>
	);
}
