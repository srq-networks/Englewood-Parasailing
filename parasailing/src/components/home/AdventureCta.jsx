import { Link } from "react-router-dom";

export default function AdventureCta() {
	return (
		<section className="flex min-h-[556px] items-center justify-center bg-[url(/images/bg/dji_0009.webp)] bg-cover bg-center px-[15px] py-16 text-center">
			<div className="flex flex-col items-center gap-10">
				<h2 className="m-0 max-w-[640px] font-el text-[45px] font-semibold leading-tight text-white md:text-[39px]">
					Are You Ready For The Adventure Of a Lifetime?
				</h2>
				<Link to="/parasailing" className="btn btn-xl bg-[#ff0808]">
					<span>Click here</span>
				</Link>
			</div>
		</section>
	);
}
