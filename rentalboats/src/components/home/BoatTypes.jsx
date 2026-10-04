import { Link } from "react-router-dom";

function ImageCell({ src, alt }) {
	return (
		<div className="m-[5px] bg-navy p-[10px]">
			<img
				src={src}
				alt={alt}
				width="1000"
				height="667"
				loading="lazy"
				className="block h-[200px] w-full object-cover"
			/>
		</div>
	);
}

export function Checkerboard() {
	return (
		<div>
			<div className="grid md:grid-cols-2">
				<div className="p-[15px]">
					<h2 className="m-0 p-[15px] text-xl leading-none">
						Pontoon Boats & Skiffs
					</h2>
					<p className="m-0 px-[15px] text-base">
						Great for cruising, exploring the islands and beaches or just
						relaxing .
					</p>
				</div>
				<ImageCell
					src="/images/home/pontoon.webp"
					alt="Pontoon boat at the dock"
				/>
				<ImageCell src="/images/home/console.webp" alt="Center console boat" />
				<div className="p-[15px]">
					<h2 className="m-0 p-[15px] text-xl leading-none">
						Center Consoles & Deck Boats
					</h2>
					<p className="m-0 px-[15px] text-base">
						Need some speed? a bit faster and great for recreational toys,
						fishing and open water.
					</p>
				</div>
			</div>
			<div className="mt-[15px] text-center md:text-right">
				<Link to="/boats" className="btn bg-[#F30202]">
					<span>View Our Boats</span>
				</Link>
			</div>
		</div>
	);
}

export function Style() {
	return (
		<div className="p-[10px] text-center">
			<h2 className="m-0 mb-5 text-[35px] leading-none">What's Your Style?</h2>
			<p className="m-0 mb-5 text-[19px]">We have a boat for you to rent…</p>
			<img
				src="/images/home/style.webp"
				alt="Friends on the water"
				width="1000"
				height="618"
				loading="lazy"
				className="block w-full border-[3px] border-[#0A094D]"
			/>
		</div>
	);
}

export default function BoatTypes() {
	return (
		<section className="py-10 md:py-20">
			<div className="container-x grid gap-y-10 md:grid-cols-2">
				<Checkerboard />
				<Style />
			</div>
		</section>
	);
}
