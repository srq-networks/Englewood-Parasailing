import { Link } from "react-router-dom";
import { TEASER } from "../../data/gallery";

export function Intro() {
	return (
		<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
			<div className="px-[10px]">
				<p className="kicker m-0">Parasailing Adventure</p>
				<h2 className="display-blue m-0 mt-2.5">Gallery</h2>
				<p className="m-0 mt-5 max-w-[470px] font-el text-[16px] leading-7 text-muted">
					Check out the amazing views parasailing in beautiful Englewood, FL.
				</p>
			</div>
			<div className="px-[10px]">
				<Link to="/pics" className="btn btn-red px-10 pt-[26px] pb-[22px]">
					<span>View Gallery</span>
				</Link>
			</div>
		</div>
	);
}

export function Photos() {
	return (
		<div className="mt-[30px] grid gap-5 md:grid-cols-3">
			{TEASER.map((p) => (
				<img
					key={p.src}
					src={p.src}
					alt={p.alt}
					width="1024"
					height="683"
					loading="lazy"
					className="mx-[10px] block aspect-[3/2] w-auto rounded-[50px] object-cover"
				/>
			))}
		</div>
	);
}

export default function GalleryTeaser() {
	return (
		<section className="bg-light pt-[75px] pb-[60px]">
			<div className="container-x">
				<Intro />
				<Photos />
			</div>
		</section>
	);
}
