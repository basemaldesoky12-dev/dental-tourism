"use client";

import { Star, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Hotel {
  name: string;
  stars: number;
  location: string;
  price: string;
  image: string;
}

const hotels: Hotel[] = [
  {
    name: "The Nile Regency",
    stars: 5,
    location: "Cairo, Egypt",
    price: "From $95/night",
    image: "/images/accommodation-hotel.png",
  },
  {
    name: "Sanctuary Palace",
    stars: 4,
    location: "Cairo, Egypt",
    price: "From $75/night",
    image: "/images/cairo-destination.png",
  },
  {
    name: "Grand Cairo Suites",
    stars: 4,
    location: "Cairo, Egypt",
    price: "From $60/night",
    image: "/images/accommodation-hotel.png",
  },
];

export default function Accommodation() {
  const { ref, isVisible } = useInView();

  return (
    <section id="accommodation" className="bg-sand py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
        >
          <p className="text-teal uppercase tracking-[3px] text-xs font-bold mb-3">
            STAY IN COMFORT
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            Accommodation Arranged For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel, i) => (
            <div
              key={hotel.name}
              className={`rounded-xl overflow-hidden border border-light-warm bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-charcoal mb-2">
                  {hotel.name}
                </h3>

                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: hotel.stars }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1 text-stone-gray text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{hotel.location}</span>
                </div>

                <p className="text-teal font-semibold">{hotel.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
