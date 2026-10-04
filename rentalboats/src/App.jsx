import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Boats from "./pages/Boats";
import Gallery from "./pages/Gallery";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// On route change: jump to the top of a new page, or to the #hash target when one is given.
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
			<div id="top" className="relative min-h-screen">
				<TopBar />
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/boats" element={<Boats />} />
						<Route path="/galleries/:slug" element={<Gallery />} />
						<Route path="/faqs" element={<Faqs />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
				<ScrollToTop />
			</div>
		</BrowserRouter>
	);
}
