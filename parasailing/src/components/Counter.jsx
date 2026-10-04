import { useEffect, useRef, useState } from "react";

// Elementor-style counter: a number in a red 100px circle that counts from `from` to `to`
// over 2 s once it scrolls into view, with a Teko uppercase title underneath.
export default function Counter({ from, to, prefix = "", suffix = "", title }) {
	const ref = useRef(null);
	const [value, setValue] = useState(from);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let frame;
		const io = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				io.disconnect();
				const start = performance.now();
				const tick = (now) => {
					const p = Math.min((now - start) / 2000, 1);
					setValue(Math.round(from + (to - from) * p));
					if (p < 1) frame = requestAnimationFrame(tick);
				};
				frame = requestAnimationFrame(tick);
			},
			{ threshold: 0.5 },
		);
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(frame);
		};
	}, [from, to]);

	return (
		<div ref={ref} className="font-display">
			<div className="grid size-[100px] place-items-center rounded-full bg-red-link text-[62px] font-medium leading-none text-white">
				{prefix}
				{value}
				{suffix}
			</div>
			<div className="mt-1 max-w-[120px] text-[24px] font-medium uppercase leading-[34px] text-ink-2">
				{title}
			</div>
		</div>
	);
}
