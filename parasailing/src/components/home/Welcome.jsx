import { Link } from "react-router-dom";
import { PRICE_COUNTER, SAFETY_YEARS } from "../../data/site";
import Counter from "../Counter";

export function Picture() {
	return (
		<img
			src="/images/home/welcome.webp"
			alt="Riders flying under the stars-and-stripes Englewood Parasailing canopy"
			width="668"
			height="785"
			className="mx-auto mt-[75px] block h-auto w-full max-w-[668px]"
		/>
	);
}

export function Copy() {
	return (
		<div className="pt-10 text-center md:text-left lg:pt-[115px] lg:pl-[55px]">
			<p className="m-0 font-display text-[28px] font-medium leading-none text-black">
				Welcome to
			</p>
			<h2 className="m-0 font-display text-[60px] font-bold leading-none text-royal md:text-[80px] lg:text-[106px]">
				Englewood
			</h2>
			<p className="m-0 font-display text-[62px] font-semibold leading-none text-royal">
				Parasailing
			</p>
			<div className="mt-6 flex flex-col gap-5 text-[18px] leading-[30px] text-ink">
				<p className="m-0">
					<strong>Englewood’s #1</strong> Parasail rated company.
				</p>
				<p className="m-0">
					Parasail in Englewood with the areas original and most experienced and{" "}
					<strong>ONLY</strong> Full-time operator. Parasailing is a great
					family activity and we can fly ages from 5 to 105 years old.
				</p>
				<p className="m-0">
					<strong className="underline">RESERVATIONS REQUIRED SEPT -JAN</strong>
				</p>
			</div>
			<div className="mt-10 grid grid-cols-2 justify-items-center gap-5 md:justify-items-start">
				<Counter
					from={PRICE_COUNTER.from}
					to={PRICE_COUNTER.to}
					prefix="$"
					title="Flights From Per Person"
				/>
				<Counter
					from={SAFETY_YEARS.from}
					to={SAFETY_YEARS.to}
					suffix="+"
					title="Year Safety Record"
				/>
			</div>
			<Link to="/parasailing" className="btn btn-royal mt-20">
				<span>Read More</span>
			</Link>
		</div>
	);
}

export default function Welcome() {
	return (
		<section className="container-x grid pb-[120px] md:grid-cols-[55%_45%]">
			<Picture />
			<Copy />
		</section>
	);
}
