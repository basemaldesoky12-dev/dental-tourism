"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CheckCircle, Phone, Mail, MessageCircle } from "lucide-react";

const services = [
  "Dental Implants",
  "Porcelain Veneers",
  "Crowns & Bridges",
  "Teeth Whitening",
  "Full Mouth Rehab",
  "General Check-up",
  "Other",
];

const accommodationOptions = [
  "Hotel (4-5 star)",
  "Motel/Budget",
  "Apartment",
  "No Accommodation Needed",
];

const budgetOptions = [
  "Under $5,000",
  "$5,000-$10,000",
  "$10,000-$20,000",
  "$20,000-$50,000",
  "$50,000+",
  "Not Sure",
];

const trustPoints = [
  "Australian-owned and operated",
  "Vetted, internationally accredited clinics",
  "All-inclusive packages — no hidden fees",
  "Dedicated concierge from inquiry to aftercare",
];

export default function InquiryPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-stone-gray mb-2">
            <span className="hover:text-teal cursor-pointer">Home</span>
            <span className="mx-2">&gt;</span>
            <span className="text-charcoal">Contact</span>
          </p>
          <h1 className="font-[var(--font-heading)] text-4xl text-charcoal">
            Tell Us About Your Dental Needs
          </h1>
          <p className="mt-2 text-stone-gray text-lg max-w-2xl">
            Fill out the form below and our concierge team will prepare a
            personalised quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT COLUMN — Form */}
            <div className="lg:col-span-3">
              <div className="bg-sand rounded-xl p-8">
                <form onSubmit={(e) => e.preventDefault()}>
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-1.5 block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Smith"
                        className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone + Travel Dates */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-1.5 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+61 400 000 000"
                        className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-charcoal mb-1.5 block">
                        Preferred Travel Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. May 2026"
                        className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="mt-6">
                    <label className="text-sm font-medium text-charcoal mb-1.5 block">
                      Services Needed
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {services.map((s) => (
                        <label
                          key={s}
                          className="flex items-center gap-2 text-sm text-charcoal cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-light-warm text-teal focus:ring-teal"
                          />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation Preference */}
                  <div className="mt-6">
                    <label className="text-sm font-medium text-charcoal mb-1.5 block">
                      Accommodation Preference
                    </label>
                    <div className="flex flex-col gap-2">
                      {accommodationOptions.map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 text-sm text-charcoal cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="accommodation"
                            className="w-4 h-4 text-teal focus:ring-teal"
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div className="mt-6">
                    <label className="text-sm font-medium text-charcoal mb-1.5 block">
                      Budget Range
                    </label>
                    <select className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-charcoal">
                      <option value="">Select a range...</option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Tell Us More */}
                  <div className="mt-6">
                    <label className="text-sm font-medium text-charcoal mb-1.5 block">
                      Tell Us More
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any specific concerns, previous dental work, or questions..."
                      className="w-full border border-light-warm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white resize-none"
                    />
                  </div>

                  {/* Consent */}
                  <label className="flex items-start gap-2 mt-6 text-sm text-stone-gray cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-0.5 rounded border-light-warm text-teal focus:ring-teal"
                    />
                    <span>
                      I consent to DentalAU collecting and processing my
                      personal information to respond to my inquiry. View our{" "}
                      <span className="text-teal underline cursor-pointer">
                        Privacy Policy
                      </span>
                      .
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full mt-6 h-12 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors shadow-[0_4px_12px_rgba(232,115,74,0.25)]"
                  >
                    Send My Inquiry &rarr;
                  </button>

                  <p className="text-xs text-stone-gray mt-3 text-center">
                    We typically respond within 24 hours. No spam, ever.
                  </p>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Trust Card */}
              <div className="bg-white rounded-xl p-6 border border-light-warm">
                <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-4">
                  Why Choose Us?
                </h3>
                <div className="flex flex-col gap-3">
                  {trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-charcoal">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Card */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/hero-dental-clinic.png"
                  alt="Modern dental clinic in Cairo"
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 border border-light-warm">
                <h4 className="font-[var(--font-heading)] text-lg text-charcoal mb-4">
                  Prefer to Talk?
                </h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-teal" />
                    <span className="text-sm text-charcoal">
                      +61 2 8000 1234
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-teal" />
                    <span className="text-sm text-charcoal">
                      hello@dentalau.com.au
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-teal" />
                    <span className="text-sm text-charcoal">
                      WhatsApp: +61 400 000 000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
