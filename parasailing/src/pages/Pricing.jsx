import usePageMeta from "../hooks/usePageMeta";
import { EXTRAS, FREE_FALL } from "../data/pricing";
import { CANCELLATION, PHONE_HREF, PHONE_VANITY } from "../data/site";
import PricingCards from "../components/PricingCards";
import BookButton from "../components/BookButton";

export function Header() {
	return (
		<div className="flex flex-col gap-5">
			<span className="eyebrow">Pricing</span>
			<h1 className="m-0 text-[clamp(40px,5.4vw,74px)] leading-none">Parasail prices</h1>
			<p className="m-0 max-w-[52ch] text-lg text-ink-2">
				Per person, upfront, no surprises. Single, tandem or triple — up to three fly together. The whole trip runs about an hour dock to dock.
			</p>
			<p className="m-0 max-w-[60ch] text-sm text-ink-3">{FREE_FALL}</p>
		</div>
	);
}

export function Extras() {
	return (
		<div className="flex flex-col gap-7">
			<div className="flex flex-col gap-3">
				<span className="eyebrow">Extras</span>
				<h2 className="display m-0">Bring the crew. Keep the photos.</h2>
			</div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
				{EXTRAS.map((x) => (
					<div key={x.name} className="card flex flex-col gap-3 border-t-4 border-t-sky p-7">
						<span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-3">{x.name}</span>
						<span className="font-display text-5xl font-extrabold leading-none">{x.price}</span>
						<span className="text-[13px] text-ink-3">{x.priceNote}</span>
						<p className="m-0 text-[15px] text-ink-2">{x.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export function ReadyToBook() {
	return (
		<div className="flex flex-col gap-5 rounded-3xl bg-navy px-[clamp(24px,4vw,56px)] py-12 text-white">
			<h2 className="m-0 text-[clamp(30px,3.4vw,46px)]">Ready to book a flight?</h2>
			<div className="flex flex-wrap gap-3">
				<BookButton>Book online</BookButton>
				<a href={PHONE_HREF} className="btn btn-light"><span>Call {PHONE_VANITY}</span></a>
			</div>
			<p className="m-0 text-sm text-white/80">Cancellation policy: {CANCELLATION}</p>
		</div>
	);
}

export default function Pricing() {
	usePageMeta({
		title: "Pricing — Englewood Parasailing",
		description:
			"Englewood parasailing prices: Standard flight $89 (1,000 ft, 9 min) and Big Air $99 (1,200 ft, 14 min). Observers $35–$50, photo package $40. Book online or call 833-FLY-1200.",
	});
	return (
		<div className="flex flex-col gap-22 pt-12 pb-24">
			<section className="container-x"><Header /></section>
			<section className="container-x"><PricingCards /></section>
			<section className="container-x"><Extras /></section>
			<section className="container-x"><ReadyToBook /></section>
		</div>
	);
}
