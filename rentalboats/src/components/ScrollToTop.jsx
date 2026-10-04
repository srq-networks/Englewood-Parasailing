import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

// OceanWP's 40x40 scroll-to-top button, shown once the page has scrolled.
export default function ScrollToTop() {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const onScroll = () => setShown(window.scrollY > 100);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Scroll to top"
			className={`fixed right-5 bottom-5 z-30 grid size-10 place-items-center rounded-[2px] bg-black/40 text-white transition-opacity hover:bg-black/60 ${shown ? "opacity-100" : "pointer-events-none opacity-0"}`}
		>
			<ChevronUp size={20} aria-hidden="true" />
		</button>
	);
}
