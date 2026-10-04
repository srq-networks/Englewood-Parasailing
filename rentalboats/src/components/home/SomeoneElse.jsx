import { Link } from "react-router-dom";
import ShapeDivider from "../ShapeDivider";

export function Pitch() {
	return (
		<div className="p-[10px] text-center">
			<h2 className="m-0 mb-5 text-[35px] leading-[1.3] font-medium text-[#050000] [text-shadow:11px_9px_10px_#DAC4C4] md:text-[60px]">
				I bet someone else wants to go on a boat ride too!
			</h2>
			<div className="mb-5">
				<span className="mx-auto block w-[39%] border-t border-[#FF0202]" />
			</div>
			<Link to="/boats" className="btn btn-xl btn-red">
				<span>Book Now!</span>
			</Link>
		</div>
	);
}

export function Bulldog() {
	return (
		<div className="relative p-[10px]">
			<img
				src="/images/home/bulldog.webp"
				alt="Bulldog in a life vest"
				width="1000"
				height="1250"
				loading="lazy"
				className="mx-auto block w-[245px] max-w-none md:absolute md:top-[100px] md:left-[-100px] md:w-[350px]"
			/>
		</div>
	);
}

// Dock photo (fixed on desktop) with curve dividers; the bulldog overhangs both edges.
export default function SomeoneElse() {
	return (
		<section
			className="relative bg-cover bg-center py-20 lg:bg-fixed"
			style={{ backgroundImage: "url(/images/bg/dock.webp)" }}
		>
			<div aria-hidden="true" className="absolute inset-0 bg-[#3C84F5]/21" />
			<ShapeDivider shape="curve" position="top" height={40} />
			<ShapeDivider shape="curve" position="bottom" height={40} />
			<div className="container-x relative z-[2] grid items-start gap-y-10 md:grid-cols-2">
				<Pitch />
				<Bulldog />
			</div>
		</section>
	);
}
