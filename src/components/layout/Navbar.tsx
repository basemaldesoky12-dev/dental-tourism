"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Accommodation", href: "/#accommodation" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/inquiry" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-light-warm"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-[72px]">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-teal text-2xl">🦷</span>
          <span className="font-[var(--font-heading)] text-xl text-charcoal">
            DentalAU
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-[15px] font-medium text-charcoal hover:text-teal transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/inquiry"
            className="hidden sm:inline-flex items-center px-6 py-2.5 bg-coral text-white text-sm font-semibold rounded-lg hover:scale-105 transition-all duration-200 shadow-[0_4px_12px_rgba(232,115,74,0.25)]"
          >
            Get Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-light-warm px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium text-charcoal hover:text-teal border-b border-light-warm last:border-0 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/inquiry"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-6 py-3 bg-coral text-white font-semibold rounded-lg"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
