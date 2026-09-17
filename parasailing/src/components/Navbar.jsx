import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/nav";
import { RENTALS_URL, SITE_NAME } from "../data/site";
import BookButton from "./BookButton";

const linkClass = ({ isActive }) =>
	`no-underline transition-colors hover:text-sky ${isActive ? "text-sky" : "text-navy"}`;

export function Brand() {
	return (
		<Link to="/" className="mr-auto flex items-center no-underline" aria-label={SITE_NAME}>
			<img src="/images/brand/logo.webp" alt={SITE_NAME} width="600" height="428" className="block h-14 w-auto" />
		</Link>
	);
}

export function Links({ onNavigate }) {
	return (
		<>
			{NAV_LINKS.map((l) =>
				l.to.includes("#") ? (
					<Link key={l.to} to={l.to} onClick={onNavigate} className="text-navy no-underline transition-colors hover:text-sky">
						{l.label}
					</Link>
				) : (
					<NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={onNavigate} className={linkClass}>
						{l.label}
					</NavLink>
				),
			)}
			<a href={RENTALS_URL} className="inline-flex items-center gap-1 text-sky-deep no-underline hover:text-sky">
				Boat rentals <ArrowUpRight size={16} />
			</a>
		</>
	);
}

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur-md">
			<div className="container-x flex flex-wrap items-center gap-x-6 gap-y-2 py-3 text-[13px] font-bold uppercase tracking-[0.05em]">
				<Brand />
				<nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
					<Links />
					<BookButton className="btn btn-primary btn-sm" />
				</nav>
				<button
					type="button"
					className="flex size-11 items-center justify-center rounded-lg border-2 border-line text-navy xl:hidden"
					aria-expanded={open}
					aria-controls="mobile-nav"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((o) => !o)}
				>
					{open ? <X size={22} /> : <Menu size={22} />}
				</button>
				{open && (
					<nav id="mobile-nav" className="card flex basis-full flex-col gap-4 p-6 xl:hidden" aria-label="Primary">
						<Links onNavigate={close} />
						<BookButton className="btn btn-primary btn-sm self-start" />
					</nav>
				)}
			</div>
		</header>
	);
}
