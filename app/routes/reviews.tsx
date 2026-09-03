import type { Route } from "./+types/reviews";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reviews | Englewood Parasailing" },
    {
      name: "description",
      content:
        "Read what customers say about Englewood Parasailing — Englewood's #1 rated parasail company with a 15+ year safety record and hundreds of 5-star reviews.",
    },
  ];
}

const REVIEWS = [
  {
    name: "Sarah M.",
    date: "Summer 2024",
    text: "Absolutely incredible experience! The captain was professional and made us feel completely safe the entire time. The views from 1,200 feet are something you have to see to believe. Will definitely be back!",
  },
  {
    name: "John & Family",
    date: "July 2024",
    text: "We brought our kids (ages 8 and 12) and they LOVED it. The crew was fantastic with the kids and made the whole experience so fun. The optional water dip was a huge hit. Highly recommend for families!",
  },
  {
    name: "Mike T.",
    date: "Spring 2024",
    text: "Best parasailing experience I've ever had. The 14-minute Deluxe package was worth every penny. Saw dolphins from the air! The free fall gave us all an adrenaline rush. 5 stars all around.",
  },
  {
    name: "Lisa & Greg",
    date: "August 2024",
    text: "We were nervous at first but the captain was so reassuring. The ride up was smooth and the views were stunning. We got the photo package too — photos came out amazing!",
  },
  {
    name: "David R.",
    date: "Summer 2024",
    text: "Don't hesitate — just book it! This was the highlight of our Englewood vacation. The whole crew made it an incredibly memorable experience from start to finish.",
  },
  {
    name: "The Johnson Family",
    date: "June 2024",
    text: "We've vacationed in Englewood for years and finally tried parasailing. Wished we had done it sooner! Grandma (age 72) even flew with us and had the time of her life. Truly lives up to the 'ages 5 to 105' promise.",
  },
];

export default function Reviews() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-teko font-semibold tracking-wide">
          Customer Reviews
        </h1>
        <p className="mt-2 text-gray-300">See what our guests are saying</p>
        <div className="mt-4 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-ep-yellow text-2xl">
              ★
            </span>
          ))}
          <span className="ml-2 text-gray-400 text-sm">Englewood's #1 Rated</span>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map(({ name, date, text }) => (
              <div key={name} className="bg-white rounded-xl p-6 shadow-sm flex flex-col border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-ep-yellow">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic flex-1">"{text}"</p>
                <div className="text-sm text-gray-500 border-t border-gray-100 pt-3">
                  <span className="font-semibold text-sky-900">{name}</span> · {date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-teko font-semibold mb-4 tracking-wide">
            Ready to Make Your Own Memories?
          </h2>
          <p className="text-gray-300 mb-8">Join hundreds of happy guests above the Gulf Coast.</p>
          <a
            href="tel:8333591200"
            className="bg-ep-yellow hover:bg-ep-orange text-navy hover:text-white font-bold px-10 py-4 rounded text-xl transition-colors shadow-lg inline-block"
          >
            Book Today · 833-359-1200
          </a>
        </div>
      </section>
    </main>
  );
}
