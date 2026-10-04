import { useEffect, useRef, useState } from "react";

// Class names spelled out so Tailwind sees them.
const ANIMATIONS = {
	"zoom-in": "animate-zoom-in",
	"slide-in-left": "animate-slide-in-left",
	"bounce-in": "animate-bounce-in",
};

// Plays one of the Elementor entrance animations (index.css) the first time the element
// scrolls into view. Children stay invisible until then.
export default function Reveal({ animation, className = "", children }) {
	const ref = useRef(null);
	const [seen, setSeen] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || seen) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) setSeen(true);
			},
			{ threshold: 0.15 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [seen]);

	return (
		<div
			ref={ref}
			className={`${seen ? ANIMATIONS[animation] : "invisible"} ${className}`}
		>
			{children}
		</div>
	);
}
