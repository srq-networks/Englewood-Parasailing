import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const PRIMARY_ORIGIN = "https://englewoodparasailing.com";

function upsert(selector, create) {
	let el = document.head.querySelector(selector);
	if (!el) {
		el = create();
		document.head.appendChild(el);
	}
	return el;
}

// Sets document.title, the meta description, and the canonical URL for the current route.
export default function usePageMeta({ title, description }) {
	const { pathname } = useLocation();

	useEffect(() => {
		document.title = title;

		const meta = upsert('meta[name="description"]', () => {
			const m = document.createElement("meta");
			m.name = "description";
			return m;
		});
		meta.content = description;

		const canonical = upsert('link[rel="canonical"]', () => {
			const l = document.createElement("link");
			l.rel = "canonical";
			return l;
		});
		canonical.href = PRIMARY_ORIGIN + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
	}, [title, description, pathname]);
}
