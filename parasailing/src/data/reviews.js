// Aggregate ratings shown by the Elfsight widget on the previous site.
export const RATINGS = {
	total: 1255,
	average: "4.9",
	platforms: [
		{ name: "Tripadvisor", score: "4.9", href: "https://www.tripadvisor.com/Search?q=Englewood%20Parasailing" },
		{ name: "Facebook", score: "5.0", href: "https://www.facebook.com/pages/Englewood-Parasailing-Tours/1641315582832147" },
		{ name: "Google", score: "5.0", href: "https://www.google.com/search?q=Englewood+Parasailing+reviews" },
	],
};

// Captured from the live reviews widget. `platform` is set only where the source is known.
// `featured` (a short tag) puts the review on the home-page reviews band.
export const REVIEWS = [
	{ author: "katylew227", when: "March 2025", platform: "Tripadvisor", title: "Great experience!!!", text: "Awesome experience! Friendly, accommodating staff! Great with our teen boys. Very timely and efficient! We would go back!" },
	{ author: "Heather B", when: "March 2025", platform: "Tripadvisor", featured: "Families & kids", title: "Parasailing", text: "Great time, good captain and first mate. Would recommend to go with them. They dunked the kids — fun atmosphere and great dolphins to view." },
	{ author: "Tammy Pershing", when: "1 month ago", platform: "Google", text: "Captain Brian and Jay gave us a great ride! Highly recommend Englewood Parasailing for your next adventure!" },
	{ author: "Gabriel Torres", when: "1 month ago", platform: "Google", text: "Super cool el paseo 🚀🛥️" },
	{ author: "megan burckhalter", when: "5 months ago", platform: "Google", text: "Great time! So much fun and felt safe and welcome! Highly recommend!" },
	{ author: "Sasha Brodnicki", when: "1 year ago", platform: "Google", text: "Friendly, safe and fun!!!" },
	{ author: "Cheyenne Mahnke", when: "1 year ago", platform: "Google", text: "Wonderful experience and very professional! The whole experience was very safe and fun! You could really tell that they take care in the work they do!" },
	{ author: "Hayden Lute", when: "1 year ago", platform: "Google", text: "I had Captain Dimitri and Captain Bryan, it was a great experience. 10/10 recommend. Very welcoming and friendly!" },
	{ author: "Tour44313977253", when: "December 2023", platform: "Tripadvisor", title: "Awesome experience", text: "My husband and I had an awesome experience! Captains Brian and Ryan were very friendly, funny and professional." },
	{ author: "xmandaxpandax", when: "April 2023", platform: "Tripadvisor", featured: "Higher, longer, dipped", title: "We recommend this for everyone", text: "We had so much fun! My nephew and I went and I'm so glad we chose these guys. They were funny, kind, professional, knowledgeable, and most of all — fun! We seemed much higher than the other companies, and we were up for almost 20 whole minutes. We also enjoyed being dipped and landing easily back on the boat. Can't wait to do it again!" },
	{ author: "K Q", when: "January 2023", platform: "Tripadvisor", featured: "Dolphins & felt safe", title: "Great time, felt safe, would highly recommend", text: "Our favorite part was seeing the dolphins swim with our boat. The two captains were super cool and very professional and helpful. Great experience." },
	{ author: "Kody Meyer", when: "2 years ago", platform: "Google", text: "Amazing experience! Had lots of fun, definitely recommend!" },
	{ author: "Hannah Ferguson", when: "3 years ago", platform: "Google", text: "Captain Dimitri and Megan were amazing from the moment we called to inquire about their services to when we arrived to get set up and on the boat! We had a great time! Thank you guys so much!" },
	{ author: "Jake Walton", when: "February 2021", platform: "Tripadvisor", text: "All I can say is AWESOME! Thank you Kizza & Mateo. The very best — I will return for another adventure! Highly recommend, excellent in all areas, boat full of fun people, crew had us enjoying every minute. 😎🌞👍" },
];
