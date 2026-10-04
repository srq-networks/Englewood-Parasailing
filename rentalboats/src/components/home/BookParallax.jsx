import { Link } from "react-router-dom";
import ShapeDivider from "../ShapeDivider";

// Fixed-background band between the boat list and the rentals. Hidden on mobile, as on live.
export default function BookParallax() {
	return (
		<section
			className="relative mt-[200px] hidden min-h-[677px] items-center bg-cover bg-center pt-[100px] pb-20 md:flex lg:bg-fixed"
			style={{ backgroundImage: "url(/images/bg/parallax.webp)" }}
		>
			<div aria-hidden="true" className="absolute inset-0 bg-[#1162B6]/58" />
			<ShapeDivider shape="mountains" position="top" height={40} />
			<ShapeDivider shape="mountains" position="bottom" height={40} />
			<div className="container-x relative z-[2] grid grid-cols-2 items-center">
				<div className="p-[10px]">
					<Link to="/boats" className="btn btn-xl bg-[#F50505]">
						<span>Book Now!</span>
					</Link>
				</div>
				<div className="p-[10px] text-center text-white">
					<h2 className="m-0 mb-5 text-[35px] leading-[1.3] font-light tracking-[1px] text-white lg:text-[68px]">
						Get out and enjoy the water on your terms
					</h2>
					<div className="mb-5">
						<span className="mx-auto block w-[8%] border-t border-white" />
					</div>
					<p className="m-0 text-base">
						Renting a boat gives you the freedom to cruise, sandbar hop, fish,
						dolphin watch and so much more….
					</p>
				</div>
			</div>
		</section>
	);
}
