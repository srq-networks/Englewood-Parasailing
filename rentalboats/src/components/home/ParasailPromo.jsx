import { PARASAILING_URL } from "../../data/site";
import Reveal from "../Reveal";

export function PromoPhoto() {
	return (
		<Reveal animation="slide-in-left" className="p-[10px]">
			<img
				src="/images/home/parasail-promo.webp"
				alt="Three people parasailing over the Gulf"
				width="1000"
				height="1333"
				loading="lazy"
				className="block w-full rounded-[100px]"
			/>
		</Reveal>
	);
}

export function PromoCopy() {
	return (
		<div className="flex flex-col justify-center p-[10px] text-center">
			<h1 className="m-0 mb-5 text-[39px] leading-none">
				Want to Try Parasailing Too?
			</h1>
			<h2 className="m-0 mb-5 text-xl leading-none">
				Visit Our Parasailing Site.
			</h2>
			<Reveal animation="bounce-in">
				<a
					href={PARASAILING_URL}
					target="_blank"
					rel="noopener"
					className="inline-block"
				>
					<img
						src="/images/brand/parasailing-badge.webp"
						alt="Englewood Parasailing"
						width="200"
						height="143"
						loading="lazy"
						className="block"
					/>
				</a>
			</Reveal>
		</div>
	);
}

export default function ParasailPromo() {
	return (
		<section className="m-[50px] p-[10px]">
			<div className="container-x grid gap-y-10 md:grid-cols-2">
				<PromoPhoto />
				<PromoCopy />
			</div>
		</section>
	);
}
