import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/nav";
import { SITE_NAME } from "../data/site";

const linkBase = "block border-b-2 pt-[70px] pb-[30px] no-underline transition-colors hover:border-orange hover:text-orange";
const plainLink = `${linkBase} border-transparent text-white`;
const desktopLink = ({ isActive }) => `${linkBase} ${isActive ? "border-yellow text-yellow" : "border-transparent text-white"}`;

export function Brand({ className = "" }) {
	return (
		<Link to="/" aria-label={SITE_NAME} className={`block ${className}`}>
			<img
				src="/images/brand/logo.webp"
				alt={SITE_NAME}
				width="600"
				height="428"
				className="block h-auto w-full lg:h-[110px] lg:w-[171px]"
			/>
		</Link>
	);
}

// Desktop menu: Teko 26px, yellow active underline, hover dropdown for "More".
export function DesktopNav() {
	return (
		<nav
			aria-label="Primary"
			className="ml-6 hidden w-[65%] font-display text-[26px] leading-none lg:block"
		>
			<ul className="m-0 flex list-none justify-center gap-[46px] p-0">
				{NAV.map((item) => (
					<li key={item.label} className="group relative">
						{item.children ? (
							<>
								<button
									type="button"
									className="block cursor-pointer border-b-2 border-transparent pt-[70px] pb-[30px] text-white transition-colors group-hover:border-orange group-hover:text-orange"
									aria-haspopup="true"
								>
									{item.label}{" "}
									<span aria-hidden="true" className="text-[16px]">
										⌄
									</span>
								</button>
								<ul className="invisible absolute top-full left-0 m-0 w-[220px] list-none bg-dropdown p-0 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
									{item.children.map((c) => (
										<li key={c.to}>
											<Link
												to={c.to}
												className="block px-[8%] py-[7px] text-left text-white no-underline hover:bg-orange"
											>
												{c.label}
											</Link>
										</li>
									))}
								</ul>
							</>
						) : item.href ? (
							<a
								href={item.href}
								className={plainLink}
							>
								{item.label}
							</a>
						) : item.to.includes("#") ? (
							<Link
								to={item.to}
								className={plainLink}
							>
								{item.label}
							</Link>
						) : (
							<NavLink
								to={item.to}
								end={item.to === "/"}
								className={desktopLink}
							>
								{item.label}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
}

// 260px right slide-in panel (below lg). Rendered into <body> so the page can be pushed
// left (see body[data-menu-open] in index.css) without dragging the panel along.
export function MobilePanel({ open, onClose }) {
	const mobileLink = ({ isActive }) =>
		`block py-[7px] no-underline ${isActive ? "text-[#004172]" : "text-white"}`;
	return createPortal(
		<nav
			id="mobile-nav"
			aria-label="Primary"
			aria-hidden={!open}
			className={`fixed inset-y-0 right-0 z-50 w-[260px] overflow-y-auto bg-panel text-[16px] transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="flex items-center justify-between bg-orange px-4 py-2.5 text-white">
				<Menu size={22} aria-hidden="true" />
				<button
					type="button"
					onClick={onClose}
					aria-label="Close menu"
					className="cursor-pointer"
				>
					<X size={22} />
				</button>
			</div>
			<ul className="m-0 list-none p-5">
				{NAV.map((item) => (
					<li key={item.label}>
						{item.children ? (
							<>
								<span className="block py-[7px] text-white">{item.label}</span>
								<ul className="m-0 list-none p-0 pl-3">
									{item.children.map((c) => (
										<li key={c.to}>
											<NavLink
												to={c.to}
												onClick={onClose}
												className={mobileLink}
											>
												- {c.label}
											</NavLink>
										</li>
									))}
								</ul>
							</>
						) : item.href ? (
							<a
								href={item.href}
								className="block py-[7px] text-white no-underline"
							>
								{item.label}
							</a>
						) : item.to.includes("#") ? (
							<Link
								to={item.to}
								onClick={onClose}
								className="block py-[7px] text-white no-underline"
							>
								{item.label}
							</Link>
						) : (
							<NavLink
								to={item.to}
								end={item.to === "/"}
								onClick={onClose}
								className={mobileLink}
							>
								{item.label}
							</NavLink>
						)}
					</li>
				))}
			</ul>
		</nav>,
		document.body,
	);
}

// Menu bar: sits in normal flow (140px at lg) with a 20% navy wash; page heroes pull up
// underneath it with negative top margins. Below lg it is a photo band with the logo and
// a hamburger.
export default function Header() {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (open) document.body.dataset.menuOpen = "";
		else delete document.body.dataset.menuOpen;
		return () => delete document.body.dataset.menuOpen;
	}, [open]);

	return (
		<header className="relative z-20 bg-[url(/images/bg/dji_0051.webp)] bg-cover bg-center lg:bg-navy/20 lg:bg-none">
			<div className="container-x flex min-h-[246px] items-center justify-between lg:min-h-[140px] lg:items-start lg:justify-start">
				<Brand className="w-[220px] max-w-[60%] lg:mt-[30px] lg:w-[171px]" />
				<DesktopNav />
				<button
					type="button"
					onClick={() => setOpen((o) => !o)}
					aria-expanded={open}
					aria-controls="mobile-nav"
					aria-label={open ? "Close menu" : "Open menu"}
					className="cursor-pointer text-white lg:hidden"
				>
					<Menu size={34} />
				</button>
			</div>
			<MobilePanel open={open} onClose={() => setOpen(false)} />
		</header>
	);
}
