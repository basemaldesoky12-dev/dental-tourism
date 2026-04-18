const comparisons = [
  {
    procedure: "Single Implant",
    australianPrice: "$5,500",
    packagePrice: "$1,800",
    savings: "67%",
  },
  {
    procedure: "Porcelain Veneer",
    australianPrice: "$2,000",
    packagePrice: "$600",
    savings: "70%",
  },
  {
    procedure: "Zirconia Crown",
    australianPrice: "$2,200",
    packagePrice: "$700",
    savings: "68%",
  },
  {
    procedure: "Full Mouth Rehab",
    australianPrice: "$45,000",
    packagePrice: "$13,000",
    savings: "71%",
  },
];

export default function SavingsComparison() {
  return (
    <section id="savings" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-[38px] text-charcoal">
            See How Much You Could Save
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comparisons.map((item) => (
            <div
              key={item.procedure}
              className="bg-white border border-light-warm rounded-xl p-6 text-center"
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
