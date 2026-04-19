"use client";

import { useInView } from "@/hooks/useInView";

const comparisons = [
  {
    procedure: "Single Implant",
    australianPrice: "$2,100",
    packagePrice: "$340",
    savings: "83%",
  },
  {
    procedure: "Veneer",
    australianPrice: "$700",
    packagePrice: "$160",
    savings: "77%",
  },
  {
    procedure: "Endo + Crown",
    australianPrice: "$1,600",
    packagePrice: "$300",
    savings: "81%",
  },
];

export default function SavingsComparison() {
  const { ref, isVisible } = useInView();

  return (
    <section id="savings" className="bg-white py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-12 ${isVisible ? "animate-fade-up" : "anim-hidden"}`}
        >
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            See How Much You Could Save
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item, i) => (
            <div
              key={item.procedure}
              className={`bg-white border border-light-warm rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? "animate-scale-in" : "anim-hidden"}`}
              style={{ animationDelay: `${200 + i * 120}ms` }}
            >
              <h3 className="font-semibold text-charcoal mb-4">
                {item.procedure}
              </h3>

              <p className="text-stone-gray line-through text-lg mb-1">
                {item.australianPrice}
              </p>

              <p className="text-teal font-bold text-3xl mb-3">
                {item.packagePrice}
              </p>

              <span
                className="inline-block text-coral text-sm font-semibold px-3 py-1 rounded-full"
                style={{ background: "rgba(232,115,74,0.1)" }}
              >
                {item.savings} savings
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
