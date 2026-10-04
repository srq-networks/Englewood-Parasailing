import { Link } from "react-router-dom";

// Full-bleed photo band with the theme's torn top edge and a light blue wash.
export default function ReviewsBand() {
	return (
		<section className="relative bg-[url(/images/bg/testimony.webp)] bg-cover bg-top pt-[260px] pb-[180px] text-center text-white lg:bg-fixed">
			<div aria-hidden="true" className="absolute inset-0 bg-[#01a6ff]/15" />
			<div
				aria-hidden="true"
				className="absolute inset-x-0 top-0 h-[128px] bg-[url(/images/theme/top-wave.webp)] bg-[length:100%_100%]"
			/>
			<div className="container-x relative">
				<h2 className="m-0 font-script text-[50px] leading-tight md:text-[80px] lg:text-[101px]">
					Our Reviews
				</h2>
				<p className="mx-auto mt-4 mb-0 max-w-[900px] font-display text-[34px] leading-none md:text-[40px] lg:text-[70px]">
					Read all about what our customers have to say about their parasail
					experience!
				</p>
				<Link to="/reviews" className="btn btn-red mt-12">
					<span>See Our Reviews</span>
				</Link>
			</div>
		</section>
	);
}
