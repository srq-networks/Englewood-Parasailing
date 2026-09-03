import type { Route } from "./+types/pricing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pricing | Englewood Parasailing" },
    {
      name: "description",
      content:
        "Englewood Parasailing prices starting at $89/person. Standard and Deluxe flights, observer seats, and photo packages available. Call 833-359-1200 to book.",
    },
  ];
}

const ADD_ONS = [
  {
    title: "Observer Seat (Standby)",
    price: "$35",
    desc: "Ride the boat and watch the action on a standby basis.",
  },
  {
    title: "Observer Seat (Guaranteed)",
    price: "$50",
    desc: "Guaranteed seating on the boat to cheer on your group.",
  },
  {
    title: "Digital Photo Package",
    price: "$40/person",
    desc: "50–60 high-resolution photos from your entire flight delivered on an SD card.",
  },
];

export default function Pricing() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-teko font-semibold tracking-wide">Pricing</h1>
        <p className="mt-2 text-gray-300">Transparent pricing, unforgettable experiences</p>
      </section>

      {/* Flight packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy text-center mb-12 tracking-wide">
            Flight Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard */}
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex flex-col">
              <div>
                <h3 className="text-3xl font-teko font-semibold text-navy mb-1 tracking-wide">
                  Standard Flight
                </h3>
                <p className="text-gray-500 text-sm mb-6">Great for first-timers</p>
                <div className="text-5xl font-teko font-semibold text-ep-orange mb-6">
                  $89
                  <span className="text-xl font-normal text-gray-500">/person</span>
                </div>
                <ul className="space-y-3 text-gray-700 mb-8 text-sm">
                  {[
                    "1,000ft tow line",
                    "9 minutes of airtime",
                    "Optional free fall & elevator ride",
                    "Optional water dip",
                    "US Coast Guard certified captain",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-ep-orange mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tel:8333591200"
                className="block text-center bg-ep-orange hover:bg-ep-yellow text-white hover:text-navy font-semibold px-6 py-3 rounded transition-colors mt-auto"
              >
                Book Now
              </a>
            </div>

            {/* Deluxe */}
            <div className="bg-navy rounded-xl shadow-lg p-8 border-2 border-ep-yellow relative flex flex-col">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ep-yellow text-navy text-xs font-bold px-4 py-1 rounded-full tracking-wide">
                MOST POPULAR
              </div>
              <div>
                <h3 className="text-3xl font-teko font-semibold text-white mb-1 tracking-wide">
                  Deluxe Parasail
                </h3>
                <p className="text-gray-400 text-sm mb-6">The full experience</p>
                <div className="text-5xl font-teko font-semibold text-ep-yellow mb-6">
                  $99
                  <span className="text-xl font-normal text-gray-400">/person</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8 text-sm">
                  {[
                    "1,200ft tow line",
                    "14 minutes of airtime",
                    "Optional free fall & elevator ride",
                    "Optional water dip",
                    "US Coast Guard certified captain",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-ep-yellow mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tel:8333591200"
                className="block text-center bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-semibold px-6 py-3 rounded transition-colors mt-auto"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold text-navy text-center mb-10 tracking-wide">
            Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADD_ONS.map(({ title, price, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <div className="text-3xl font-teko font-semibold text-ep-orange mb-1">{price}</div>
                <h3 className="font-semibold text-navy mb-2 text-sm">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation policy */}
      <section className="bg-amber-50 border-y border-amber-200 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-amber-800 font-medium text-sm">
            <strong>Cancellation Policy:</strong> Reservations must be cancelled at least 24
            hours before your booking date/time or the full price will be charged.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold mb-4 tracking-wide">Ready to Book?</h2>
          <p className="text-gray-300 mb-8">
            Reservations required September–January. Book early during peak season!
          </p>
          <a
            href="tel:8333591200"
            className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-bold px-10 py-4 rounded text-xl transition-colors shadow-lg inline-block"
          >
            Call 833-359-1200
          </a>
        </div>
      </section>
    </main>
  );
}
