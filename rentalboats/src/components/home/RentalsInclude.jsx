import { Link } from "react-router-dom";

const ITEMS = [
	{
		image: "/images/home/uscg.webp",
		size: [1000, 1014],
		width: "63%",
		title: "Well Maintained Inspected Boats",
		text: "All our boats are safety inspected and assured to provide you a trouble free day on the water.",
	},
	{
		image: "/images/home/safety-gear.webp",
		size: [800, 711],
		width: "77%",
		title: "Safety Gear",
		text: "Our boats include: All USCG required elements: horn, fire extinguisher, and PFDs.",
	},
	{
		image: "/images/home/booking.webp",
		size: [508, 533],
		width: "59%",
		title: "Multiple Booking Options",
		text: "Book online instantly with our booking tool or call in to make your reservation. Have a special request? Call us to see if we can accommodate your needs. We are here to make your day on the water as care-free as possible.",
	},
];

export function ImageBox({ image, size, width, title, text }) {
	return (
		<div className="p-[10px] text-center md:text-left">
			<img
				src={image}
				alt=""
				width={size[0]}
				height={size[1]}
				loading="lazy"
				className="mx-auto block md:mx-0"
				style={{ width }}
			/>
			<h3 className="mt-5 mb-2 text-lg leading-none">{title}</h3>
			<p className="m-0">{text}</p>
		</div>
	);
}

export default function RentalsInclude() {
	return (
		<section className="py-20">
			<div className="container-x">
				<h2 className="m-0 mb-5 px-[10px] text-[39px] leading-none">
					Our Rentals Include:
				</h2>
				<div className="grid gap-y-8 md:grid-cols-3">
					{ITEMS.map((item) => (
						<ImageBox key={item.title} {...item} />
					))}
				</div>
				<div className="mt-10 text-center">
					<Link to="/boats" className="btn btn-xl btn-red">
						<span>Book Now!</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
