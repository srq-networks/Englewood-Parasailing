import { Check } from "lucide-react";
import { CARDS } from "../data/pricing";
import BookButton from "./BookButton";

function Feature({ f }) {
	return (
		<li className="px-[15px] py-[10px] text-[14px] leading-[30px] text-[#6d6d6d]">
			<Check
				size={20}
				strokeWidth={3}
				className="mx-1.5 inline-block align-middle text-check"
				aria-hidden="true"
			/>
			{typeof f === "string" ? (
				f
			) : (
				<>
					<strong>{f.strong}</strong>
					{f.text}
					{f.note && (
						<>
							<br />
							<strong>{f.note}</strong>
						</>
					)}
				</>
			)}
		</li>
	);
}

// Essential Addons "style-2" pricing cards: round blue icon, blue header, price, green
// check features, red book button; the featured card is lifted with a corner ribbon.
export function Card({ card }) {
	const Icon = card.icon;
	const featured = Boolean(card.ribbon);
	return (
		<div
			className={`relative border border-black/10 py-[30px] text-center ${
				featured
					? "shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)]"
					: ""
			}`}
		>
			{card.ribbon && (
				<span className="absolute top-[30px] -right-[12px] bg-[#ca0000] px-2.5 py-1 text-[10px] font-semibold uppercase leading-none text-white">
					{card.ribbon}
				</span>
			)}
			<div className="mx-auto mb-[30px] grid size-20 place-items-center rounded-full bg-card text-white">
				<Icon
					size={44}
					fill="currentColor"
					className="stroke-card"
					strokeWidth={1.5}
					aria-hidden="true"
				/>
			</div>
			<div className="mb-[15px] bg-card px-[30px] py-[25px]">
				<h3 className="m-0 font-display text-[28px] font-bold leading-[40px] text-white">
					{card.title}
				</h3>
				<p className="m-0 text-[22px] leading-[30px] text-body">
					{card.subtitle}
				</p>
			</div>
			<p
				className={`m-0 h-10 text-[28px] font-medium leading-10 ${card.unit ? "text-black" : "text-[#999]"}`}
			>
				{card.price}
				{card.unit && <span className="text-[#999]">{card.unit}</span>}
			</p>
			<ul className="m-0 mt-[29px] mb-[15px] list-none p-0">
				{card.features.map((f, i) => (
					<Feature key={i} f={f} />
				))}
			</ul>
			{card.book && (
				<BookButton className="block w-full bg-price-btn px-[25px] py-3 text-[14px] font-semibold uppercase leading-[30px] text-white no-underline transition-colors hover:bg-[#03b048]">
					Book Now
				</BookButton>
			)}
		</div>
	);
}

export default function PricingCards() {
	return (
		<div className="grid gap-5 md:grid-cols-3">
			{CARDS.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
}
