import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

// The theme's `.to_top` button: fades in once the page has scrolled 800px.
export default function ToTop() {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const onScroll = () => setShown(window.scrollY > 800);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			type="button"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			aria-label="Back to top"
			tabIndex={shown ? 0 : -1}
			className={`fixed right-5 bottom-5 z-40 grid size-10 cursor-pointer place-items-center rounded-full bg-black/20 pt-0.5 text-white transition-opacity duration-300 hover:opacity-100 ${
				shown ? "opacity-40" : "pointer-events-none opacity-0"
			}`}
		>
			<ChevronUp size={28} />
		</button>
	);
}
