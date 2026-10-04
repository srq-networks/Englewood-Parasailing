import { DESIGN_CREDIT, SITE_NAME } from "../data/site";

// Black copyright bar; the live site has no footer widgets (Get In Touch is page content).
export default function Footer() {
	return (
		<footer className="bg-[#020202] p-[15px] text-center text-[13px] tracking-[1px] text-white">
			© Copyright 2024 {SITE_NAME}- Site design by{" "}
			<a
				href={DESIGN_CREDIT.href}
				target="_blank"
				rel="noopener"
				className="text-white hover:text-hover"
			>
				{DESIGN_CREDIT.name}
			</a>
		</footer>
	);
}
