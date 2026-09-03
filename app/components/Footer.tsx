import { Link } from "react-router";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/parasailing", label: "Parasailing" },
  { to: "/pricing", label: "Pricing" },
  { to: "/reviews", label: "Reviews" },
  { to: "/photos", label: "Photos" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://englewoodparasailing.com/wp-content/uploads/2023/06/DJI_0051.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-teko font-semibold text-ep-yellow mb-3 tracking-wide">
              Englewood Parasailing
            </h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Englewood's #1 rated parasail company with a 15+ year safety record. Experience
              the Florida Gulf Coast from 1,200 feet in the air — the only full-time operator in
              Englewood, FL.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.facebook.com/pages/Englewood-Parasailing-Tours/1641315582832147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ep-orange transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/englewoodparasailingtours/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-ep-orange transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-teko font-semibold text-white mb-3 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-300 hover:text-ep-orange transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-teko font-semibold text-white mb-3 tracking-wide">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <a
                  href="tel:8333591200"
                  className="hover:text-ep-orange transition-colors font-semibold text-white text-base"
                >
                  833-359-1200
                </a>
              </p>
              <p>
                1450 Beach Road
                <br />
                Englewood, FL 34223
              </p>
              <p>
                Mon–Fri: 9am–10pm
                <br />
                Sat: 8am–11pm
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 space-y-2 text-center text-sm text-gray-400">
          <p>
            <strong className="text-gray-300">Cancellation Policy:</strong> Reservations must be
            cancelled 24 hours before booking date/time or will be charged full price.
          </p>
          <p>© {new Date().getFullYear()} Englewood Parasailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
