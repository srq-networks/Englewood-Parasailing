import usePageMeta from "../hooks/usePageMeta";
import { ELFSIGHT } from "../data/site";
import PageHero from "../components/PageHero";
import ElfsightWidget from "../components/ElfsightWidget";

export default function Reviews() {
	usePageMeta({
		title: "Reviews – Englewood Parasailing",
		description:
			"Read all about what our customers have to say about their parasail experience with Englewood Parasailing.",
	});
	return (
		<>
			<PageHero
				kicker="Our Rave"
				title="Reviews"
				bg="/images/bg/testimony.webp"
				heading="From Our Customers"
				alignMobileRight
			/>
			<section className="bg-light-2 pt-5 pb-5">
				<div className="container-x min-h-[600px] px-[25px]">
					<ElfsightWidget id={ELFSIGHT.reviews} />
				</div>
			</section>
		</>
	);
}
