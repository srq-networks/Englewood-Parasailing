import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookNowFloat from "./components/BookNowFloat";
import ToTop from "./components/ToTop";
import Home from "./pages/Home";
import Parasailing from "./pages/Parasailing";
import Pricing from "./pages/Pricing";
import Reviews from "./pages/Reviews";
import Pics from "./pages/Pics";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// On route change: jump to the top of a new page, or to the #hash target when one is
// given (the nav "Contact" link is "/#contact" so it works from any page).
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
			<div id="top" className="min-h-screen">
				<TopBar />
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/parasailing" element={<Parasailing />} />
						<Route path="/pricing" element={<Pricing />} />
						<Route path="/reviews" element={<Reviews />} />
						<Route path="/pics" element={<Pics />} />
						<Route path="/social" element={<Social />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
			<BookNowFloat />
			<ToTop />
		</BrowserRouter>
	);
}
