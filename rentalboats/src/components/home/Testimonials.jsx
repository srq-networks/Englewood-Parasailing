import { REVIEWS } from "../../data/reviews";
import Reveal from "../Reveal";

export function Testimonial({ quote, name }) {
	return (
		<Reveal animation="zoom-in" className="px-[10px]">
			<figure className="m-0 text-center text-white">
				<blockquote className="m-0 text-base leading-[1.6]">{quote}</blockquote>
				<figcaption className="mt-5 text-[15px]">{name}</figcaption>
			</figure>
		</Reveal>
	);
}

// Six static testimonials on the surf photo under a blue wash (fixed background on desktop).
export default function Testimonials() {
	return (
		<section
			className="relative bg-cover bg-center pt-20 pb-[30px] lg:bg-fixed"
			style={{ backgroundImage: "url(/images/bg/surf-family.webp)" }}
		>
			<div aria-hidden="true" className="absolute inset-0 bg-[#1866A2]/71" />
			<div className="container-x relative text-center">
				<h2 className="m-0 mb-5 text-[26px] leading-none font-light text-[#FFEDED] md:text-[45px]">
					OUR AMAZING CUSTOMER'S PERSPECTIVE
				</h2>
				<div className="mb-5">
					<span className="mx-auto block w-[5%] border-t-[3px] border-[rgba(0,0,0,0.6)]" />
				</div>
				<h3 className="m-0 mb-10 text-[21px] leading-none font-normal text-[#DBDBDB]">
					Our customer's experiences in their own words....
				</h3>
				<div className="grid gap-y-10 md:grid-cols-3">
					{REVIEWS.map((review) => (
						<Testimonial key={review.name} {...review} />
					))}
				</div>
			</div>
		</section>
	);
}
