import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import Home from "./pages/Home";
import Parasailing from "./pages/Parasailing";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Pics from "./pages/Pics";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

// On route change: jump to the top of a new page, or to the #hash target when one is
// given (nav links use "/#contact" so they work from any page).
function ScrollManager() {
	const { pathname, hash } = useLocation();
	useEffect(() => {
		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "start" });
				return;
			}
		}
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [pathname, hash]);
	return null;
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollManager />
			<div id="top" className="relative min-h-screen pb-20 md:pb-0">
				<TopBar />
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/parasailing" element={<Parasailing />} />
						<Route path="/pricing" element={<Pricing />} />
						<Route path="/reviews" element={<Reviews />} />
						<Route path="/pics" element={<Pics />} />
						<Route path="/social" element={<Social />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
				<StickyBar />
			</div>
		</BrowserRouter>
	);
}
