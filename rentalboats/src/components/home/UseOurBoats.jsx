import { Check } from "lucide-react";

const USES = [
	"Fishing",
	"Shelling & Beach Excursions",
	"Snorkeling & Swimming",
	"Sandbar Hopping",
	"Cruising",
];

export function UseList() {
	return (
		<div className="p-[10px] md:w-1/2">
			<h2 className="m-0 mb-5 pl-10 text-[31px] leading-none text-white">
				Use Our Boats For:
			</h2>
			<ul className="m-0 list-none p-0 pl-10 md:pl-[153px]">
				{USES.map((use) => (
					<li
						key={use}
						className="flex items-center gap-2 text-[17px] font-extrabold text-white md:text-[32px]"
					>
						<Check
							size={42}
							aria-hidden="true"
							className="shrink-0 text-check"
						/>
						{use}
					</li>
				))}
			</ul>
		</div>
	);
}

export function UsePhoto() {
	return (
		<div className="p-[10px] md:w-1/2">
			<img
				src="/images/home/use-for.webp"
				alt="Fishing from the bow"
				width="800"
				height="533"
				loading="lazy"
				className="block w-full"
			/>
		</div>
	);
}

export default function UseOurBoats() {
	return (
		<section className="mx-[15px] my-10 flex min-h-[320px] flex-col bg-navy md:mx-0 md:mt-[50px] md:mb-20 md:flex-row md:items-center">
			<UseList />
			<UsePhoto />
		</section>
	);
}
