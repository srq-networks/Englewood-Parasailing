import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, Minus, Plus } from "lucide-react";
import { NAV } from "../data/nav";
import { SITE_NAME } from "../data/site";

const desktopLink = ({ isActive }) =>
	`block px-[15px] font-display text-[19px] leading-[103px] tracking-[0.6px] uppercase hover:text-nav-hover ${isActive ? "text-nav-current" : "text-white"}`;

function DesktopItem({ item }) {
	if (item.external) {
		return (
			<li className="bg-[rgba(2,0,0,0.32)]">
				<a
					href={item.href}
					className="block px-[15px] font-display text-[19px] leading-[103px] tracking-[0.6px] text-white uppercase hover:text-nav-hover"
				>
					{item.label}
				</a>
			</li>
		);
	}
	if (item.children) {
		return (
			<li className="group relative bg-[rgba(2,0,0,0.32)]">
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					aria-haspopup="true"
					className="block px-[15px] font-display text-[19px] leading-[103px] tracking-[0.6px] text-white uppercase hover:text-nav-hover"
				>
					<span className="inline-flex items-center gap-1.5">
						{item.label}
						<ChevronDown size={16} aria-hidden="true" />
					</span>
				</a>
				<ul className="invisible absolute top-full left-0 z-30 m-0 min-w-[240px] list-none border-t-[3px] border-white bg-white p-0 opacity-0 shadow-[0_2px_6px_rgba(0,0,0,0.1)] transition-opacity group-hover:visible group-hover:opacity-100">
					{item.children.map((child) => (
						<li
							key={child.to}
							className="border-b border-[#F1F1F1] last:border-b-0"
						>
							<NavLink
								to={child.to}
								className="block px-[15px] py-3 text-base leading-[1.2] tracking-[0.6px] text-link hover:text-hover"
							>
								{child.label}
							</NavLink>
						</li>
					))}
				</ul>
			</li>
		);
	}
	return (
		<li className="bg-[rgba(2,0,0,0.32)]">
			<NavLink to={item.to} end={item.to === "/"} className={desktopLink}>
				{item.label}
			</NavLink>
		</li>
	);
}

export function DesktopNav() {
	return (
		<nav aria-label="Main" className="hidden nav:block">
			<ul className="m-0 flex list-none p-0">
				{NAV.map((item) => (
					<DesktopItem key={item.label} item={item} />
				))}
			</ul>
		</nav>
	);
}

const mobileLink =
	"block px-10 py-3 text-[15px] leading-[1.4] text-link hover:text-hover";

export function MobileNav({ open, onToggle }) {
	const [subOpen, setSubOpen] = useState(false);
	return (
		<div className="nav:hidden">
			<button
				type="button"
				onClick={onToggle}
				aria-expanded={open}
				aria-controls="mobile-menu"
				className="flex items-center gap-2 font-display text-[19px] tracking-[0.6px] text-white uppercase"
			>
				<Menu size={18} aria-hidden="true" />
				{open ? "Close" : "Menu"}
			</button>
			{open && (
				<nav
					id="mobile-menu"
					aria-label="Main"
					className="absolute top-full right-0 left-0 z-30 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)]"
				>
					<ul className="m-0 list-none p-0">
						{NAV.map((item) => (
							<li
								key={item.label}
								className="border-b border-black/[0.035] last:border-b-0"
							>
								{item.external ? (
									<a href={item.href} className={mobileLink}>
										{item.label}
									</a>
								) : item.children ? (
									<>
										<div className="flex items-center">
											<span className={`${mobileLink} grow`}>{item.label}</span>
											<button
												type="button"
												onClick={() => setSubOpen((v) => !v)}
												aria-expanded={subOpen}
												aria-label={`${subOpen ? "Hide" : "Show"} ${item.label}`}
												className="grid size-12 place-items-center text-link"
											>
												{subOpen ? <Minus size={16} /> : <Plus size={16} />}
											</button>
										</div>
										{subOpen && (
											<ul className="m-0 list-none p-0">
												{item.children.map((child) => (
													<li
														key={child.to}
														className="border-t border-black/[0.035]"
													>
														<NavLink
															to={child.to}
															className={`${mobileLink} pl-14`}
														>
															{child.label}
														</NavLink>
													</li>
												))}
											</ul>
										)}
									</>
								) : (
									<NavLink
										to={item.to}
										end={item.to === "/"}
										className={mobileLink}
									>
										{item.label}
									</NavLink>
								)}
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
}

// OceanWP transparent header: absolutely positioned over the page content, right under
// the top bar, so each page adds its own top offset. Palm photo over a light grey wash.
export default function Header() {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	// Close the mobile panel when the route changes (state reset during render, no effect).
	const [prevPath, setPrevPath] = useState(pathname);
	if (prevPath !== pathname) {
		setPrevPath(pathname);
		setOpen(false);
	}

	return (
		<header className="absolute inset-x-0 top-[45px] z-20 border-b border-[#0A1F4C] bg-[linear-gradient(rgba(234,234,234,0.86),rgba(234,234,234,0.86)),url('/images/bg/header-palms.webp')] bg-cover bg-right">
			<div className="mx-auto flex max-w-[90%] items-center justify-between md:max-w-[1200px]">
				<Link to="/" className="block shrink-0">
					<img
						src="/images/brand/logo.webp"
						alt={SITE_NAME}
						width="595"
						height="436"
						className="block w-[137px] max-w-full nav:w-[170px]"
					/>
				</Link>
				<DesktopNav />
				<MobileNav open={open} onToggle={() => setOpen((v) => !v)} />
			</div>
		</header>
	);
}
