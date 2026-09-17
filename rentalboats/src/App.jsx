import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookingProvider from "./components/BookingWidget";
import StickyBookingBar from "./components/StickyBookingBar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// On route change: jump to the top of a new page, or to the #hash target when one is
// given (nav links use "/#fleet" so they work from any page).
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
			<BookingProvider>
				<div id="top" className="relative min-h-screen pb-20 md:pb-0">
					<Navbar />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
					<StickyBookingBar />
				</div>
			</BookingProvider>
		</BrowserRouter>
	);
}
