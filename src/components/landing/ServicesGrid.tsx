"use client";

import Link from "next/link";
import {
  Blocks,
  Sparkles,
  Crown,
  Sun,
  RefreshCw,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    icon: Blocks,
    title: "Dental Implants",
    description:
      "Titanium implants placed by experienced surgeons using the latest guided surgery techniques.",
    price: "From $1,500",
  },
  {
    icon: Sparkles,
    title: "Porcelain Veneers",
    description:
      "Ultra-thin porcelain shells custom-crafted to transform your smile with natural-looking results.",
    price: "From $400",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description:
      "Durable, lifelike restorations made with premium zirconia and porcelain materials.",
    price: "From $500",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description:
      "Professional-grade whitening treatments for a brighter, more confident smile.",
    price: "From $150",
  },
  {
    icon: RefreshCw,
    title: "Full Mouth Rehab",
    description:
      "Comprehensive reconstruction combining implants, crowns, and veneers for a complete transformation.",
    price: "From $8,000",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description:
      "Routine check-ups, fillings, extractions, and preventive care at a fraction of the cost.",
    price: "From $100",
  },
];

export default function ServicesGrid() {
  const { ref, isVisible } = useInView();

  return (
    <section id="services" className="bg-white py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
        >
          <p className="text-teal uppercase tracking-[3px] text-xs font-bold mb-3">
            OUR SERVICES
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            World-Class Dental Care, Unbeatable Prices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white border border-light-warm rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(13,115,119,0.1)" }}>
                  <Icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-semibold text-lg text-charcoal mb-2">
                  {service.title}
                </h3>
                <p className="text-stone-gray text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                <p className="text-teal font-semibold mb-2">{service.price}</p>
                <Link
                  href="/inquiry"
                  className="text-teal text-sm font-medium hover:underline"
                >
                  Details &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
