import usePageMeta from "../hooks/usePageMeta";
import { CANCELLATION } from "../data/site";
import PageHero from "../components/PageHero";
import PricingCards from "../components/PricingCards";

export function Cancellation() {
	return (
		<section className="container-x">
			<p className="m-0 px-[10px] py-[10px] font-el text-[20px] leading-[30px] text-muted md:text-[22px]">
				<strong className="text-black">CANCELLATION POLICY:</strong>{" "}
				{CANCELLATION}
			</p>
		</section>
	);
}

export default function Pricing() {
	usePageMeta({
		title: "Pricing – Englewood Parasailing",
		description:
			"Englewood parasailing prices: Deluxe Parasail $99 (1200 ft, 14 minutes) and Standard Flight $89 (1000 ft, 9 minutes). Observers $35 / $50 guaranteed, photos $40. Book online or call 833-FLY-1200.",
	});
	return (
		<>
			<PageHero
				kicker="The Best"
				title="Parasail Prices"
				bg="/images/bg/back.webp"
				heading="Ready to Book a Flight?"
			/>
			<section className="bg-light-2 pt-[30px] pb-5">
				<div className="container-x">
					<PricingCards />
				</div>
			</section>
			<Cancellation />
		</>
	);
}
