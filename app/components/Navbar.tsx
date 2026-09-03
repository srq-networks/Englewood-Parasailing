import { useState } from "react";
import { Link, NavLink } from "react-router";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/parasailing", label: "Parasailing" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/photos", label: "Photos" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: "#001960" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-teko text-2xl font-semibold text-white tracking-wide hover:text-ep-yellow transition-colors"
          >
            Englewood Parasailing
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium font-[Poppins] transition-colors relative ${
                    isActive
                      ? "text-ep-yellow"
                      : "text-white hover:text-ep-orange"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:8333591200"
              className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-semibold px-4 py-2 rounded text-sm transition-colors font-[Poppins]"
            >
              833-359-1200
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <span className="block text-xl text-white leading-none">✕</span>
            ) : (
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-6 h-0.5 bg-white" />
                <div className="w-6 h-0.5 bg-white" />
              </div>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/20 space-y-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ep-yellow bg-white/10"
                      : "text-white hover:text-ep-orange hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="tel:8333591200"
              className="block mt-3 bg-ep-yellow text-navy font-semibold px-4 py-2 rounded text-sm text-center"
            >
              Call 833-359-1200
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
