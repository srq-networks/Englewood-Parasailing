import { data, Form, useActionData } from "react-router";
import type { Route } from "./+types/contact";
import { db } from "../../db/index";
import { contactSubmissions } from "../../db/schema";
import { Resend } from "resend";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Englewood Parasailing" },
    {
      name: "description",
      content:
        "Contact Englewood Parasailing to book your flight or ask questions. Call 833-359-1200 or send us a message.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !subject || !message) {
    return data({ error: "All fields are required." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return data({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    await db.insert(contactSubmissions).values({ name, email, subject, message });

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Englewood Parasailing <noreply@englewoodparasailing.com>",
      to: process.env.OWNER_EMAIL ?? "info@englewoodparasailing.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return data({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return data(
      { error: "Something went wrong. Please call us directly at 833-359-1200." },
      { status: 500 }
    );
  }
}

const INFO_ITEMS = [
  { label: "Phone", value: "833-359-1200", href: "tel:8333591200" },
  { label: "Address", value: "1450 Beach Road\nEnglewood, FL 34223", href: null },
  { label: "Hours", value: "Mon–Fri: 9am–10pm\nSat: 8am–11pm", href: null },
];

export default function Contact() {
  const actionData = useActionData<typeof action>();

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-teko font-semibold tracking-wide">Contact Us</h1>
        <p className="mt-2 text-gray-300">We'd love to hear from you</p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-sky-950">Get in Touch</h2>
              <p className="text-gray-600">
                The fastest way to book is to call us. For general questions, fill out the form
                and we'll get back to you promptly.
              </p>

              {INFO_ITEMS.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-xs font-semibold text-sky-500 uppercase tracking-wide mb-1">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sky-950 font-semibold hover:text-sky-600 transition-colors text-lg"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-700 whitespace-pre-line">{value}</p>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <a
                  href="tel:8333591200"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-base transition-colors inline-block"
                >
                  Call to Book Now
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
              {actionData && "success" in actionData && actionData.success ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-sky-950 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thanks for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-teko font-semibold text-navy mb-6 tracking-wide">Send a Message</h2>

                  {actionData && "error" in actionData && (
                    <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {actionData.error}
                    </div>
                  )}

                  <Form method="post" className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                        placeholder="Booking inquiry, question..."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-ep-orange hover:bg-ep-yellow text-white hover:text-navy font-semibold px-6 py-3 rounded transition-colors text-lg"
                    >
                      Send Message
                    </button>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
