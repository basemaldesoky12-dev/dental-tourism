"use client";

import Link from "next/link";
import { Users, TrendingDown, Package, Shield } from "lucide-react";
import { useEffect, useState } from "react";

const trustItems = [
  { icon: Users, label: "500+ Happy Patients" },
  { icon: TrendingDown, label: "70% Average Savings" },
  { icon: Package, label: "All-Inclusive Packages" },
  { icon: Shield, label: "Australian-Owned" },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hero-dental-clinic.png"
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${loaded ? "scale-100" : "scale-110"}`}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(14,22,32,0.8), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-xl px-6 md:px-12 lg:px-20 py-20">
          <p
            className={`text-teal-bright uppercase tracking-[3px] text-[11px] font-semibold mb-4 ${loaded ? "animate-fade-up" : "anim-hidden"}`}
          >
            AUSTRALIAN DENTAL TOURISM
          </p>

          <h1
            className={`font-[var(--font-heading)] text-4xl md:text-5xl lg:text-[67px] text-white leading-tight mb-6 ${loaded ? "animate-fade-up delay-200" : "anim-hidden"}`}
          >
            Save Up To 70% On Dental Care
          </h1>

          <p
            className={`text-lg mb-8 max-w-md ${loaded ? "animate-fade-up delay-400" : "anim-hidden"}`}
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Premium dental packages in Egypt, personally arranged and tailored to your needs.
          </p>

          <div
            className={`flex flex-wrap gap-4 ${loaded ? "animate-fade-up delay-500" : "anim-hidden"}`}
          >
            <Link
              href="/inquiry"
              className="inline-block bg-coral text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-charcoal transition-all duration-200"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="relative z-10"
        style={{ background: "rgba(14,22,32,0.7)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-between gap-6">
          {trustItems.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`flex items-center gap-2 text-white text-sm ${loaded ? `animate-fade-up delay-${(i + 5) * 100}` : "anim-hidden"}`}
              style={{ animationDelay: `${600 + i * 100}ms` }}
            >
              <Icon className="w-5 h-5 text-teal-bright" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
