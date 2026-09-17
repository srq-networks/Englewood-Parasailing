import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { PARASAIL_URL, PHONE_DISPLAY, PHONE_HREF, SITE_NAME } from "../data/site";
import useBooking from "../hooks/useBooking";

const NAV_LINKS = [
	{ label: "The fleet", to: "/#fleet" },
	{ label: "Explore", to: "/#explore" },
	{ label: "Reviews", to: "/#reviews" },
	{ label: "FAQ", to: "/#faq" },
];

export function Brand() {
	return (
		<Link to="/" className="mr-auto flex items-center no-underline" aria-label={SITE_NAME}>
			<img src="/images/brand/logo.webp" alt={SITE_NAME} width="595" height="436" className="block h-14 w-auto" />
		</Link>
	);
}

export function Links({ onNavigate }) {
	return (
		<>
			{NAV_LINKS.map((l) => (
				<Link key={l.to} to={l.to} onClick={onNavigate} className="text-navy no-underline transition-colors hover:text-teal">
					{l.label}
				</Link>
			))}
			<a href={PARASAIL_URL} className="text-navy no-underline transition-colors hover:text-teal">Parasailing</a>
			<a href={PHONE_HREF} className="font-bold text-teal no-underline hover:text-navy">{PHONE_DISPLAY}</a>
		</>
	);
}

export function BookLink({ onClick, className = "" }) {
	const { open } = useBooking();
	return (
		<button type="button" onClick={() => { onClick?.(); open(); }} className={`btn btn-coral btn-sm ${className}`}>
			Book Online
		</button>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<header className="sticky top-0 z-20 border-b border-line bg-surface/95 backdrop-blur">
			<div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-[15px] font-semibold">
				<Brand />
				<nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
					<Links />
					<BookLink />
				</nav>
				<button
					type="button"
					className="flex size-11 items-center justify-center rounded-xl border-2 border-line text-navy lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-nav"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((o) => !o)}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
				{open && (
					<nav id="mobile-nav" className="card mb-3 flex basis-full flex-col gap-4 p-6 lg:hidden" aria-label="Primary">
						<Links onNavigate={close} />
						<BookLink onClick={close} className="self-start" />
					</nav>
				)}
			</div>
		</header>
	);
}
