import { Star, MapPin } from "lucide-react";

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
  return (
    <section id="accommodation" className="bg-sand py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-teal uppercase tracking-[3px] text-xs font-bold mb-3">
            STAY IN COMFORT
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            Accommodation Arranged For You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="rounded-xl overflow-hidden border border-light-warm bg-white"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-charcoal mb-2">
                  {hotel.name}
                </h3>

                <div className="flex gap-0.5 mb-2">
                  {Array.from({ length: hotel.stars }).map((_, i) => (
                    <Star
                      key={i}
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
