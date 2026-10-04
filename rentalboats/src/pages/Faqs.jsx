import { useState } from "react";
import { ChevronRight, Minus, Plus } from "lucide-react";
import usePageMeta from "../hooks/usePageMeta";
import { FAQ } from "../data/faq";
import GetInTouch from "../components/GetInTouch";

export function Answer({ parts }) {
	return (
		<p className="m-0 p-[15px] text-xl text-heading">
			{parts.map((part, i) =>
				typeof part === "string" ? (
					part
				) : (
					<a key={i} href={part.href} target="_blank" rel="noopener">
						{part.text}
					</a>
				),
			)}
		</p>
	);
}

export function AccordionItem({ id, q, a, open, onToggle }) {
	return (
		<div className="mb-[10px]">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				aria-controls={id}
				className={`group flex w-full cursor-pointer items-center gap-[10px] border border-black/[0.02] bg-[linear-gradient(180deg,#F1F1F1_0%,#F2A4295C_100%)] px-[15px] py-5 text-left hover:bg-[#C4C4C4] hover:bg-none`}
			>
				{open ? (
					<Minus size={16} aria-hidden="true" className="shrink-0" />
				) : (
					<Plus size={16} aria-hidden="true" className="shrink-0" />
				)}
				<span
					className={`grow text-[21px] leading-none font-semibold group-hover:text-[#18296B] ${open ? "text-[#165B80]" : "text-heading"}`}
				>
					{q}
				</span>
				<ChevronRight size={16} aria-hidden="true" className="shrink-0" />
			</button>
			<div
				id={id}
				className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
			>
				<div className="overflow-hidden">
					<Answer parts={a} />
				</div>
			</div>
		</div>
	);
}

export default function Faqs() {
	usePageMeta({
		title: "FAQs - Englewood Rental Boats",
		description:
			"Renting requirements, captains, weather, cancellations, fuel, GPS, safety gear and hours for Englewood Rental Boats.",
	});
	const [openIndex, setOpenIndex] = useState(-1);
	return (
		<>
			<div className="container-x pt-[130px]">
				{FAQ.map((item, i) => (
					<AccordionItem
						key={item.q}
						id={`faq-${i}`}
						{...item}
						open={openIndex === i}
						onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
					/>
				))}
			</div>
			<GetInTouch />
		</>
	);
}
