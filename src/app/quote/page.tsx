import { Hotel, Plane, Shield, Car } from "lucide-react";

const dentalServices = [
  {
    service: "Dental Implant (x2)",
    clinic: "Cairo Dental Excellence",
    description: "Premium titanium implants with porcelain crowns",
    price: 3600,
  },
  {
    service: "Porcelain Veneers (x4)",
    clinic: "Smile Studio Cairo",
    description: "E-max porcelain veneers, custom shade-matched",
    price: 2400,
  },
  {
    service: "Teeth Whitening",
    clinic: "Cairo Dental Excellence",
    description: "In-office professional whitening treatment",
    price: 250,
  },
];

const additionalServices = [
  { label: "Airport Transfer (Return)", price: 80, icon: Plane },
  { label: "Travel Insurance", price: "Included", icon: Shield },
  { label: "Local Transport (7 days)", price: 120, icon: Car },
];

export default function QuotePage() {
  const servicesSubtotal = dentalServices.reduce((s, d) => s + d.price, 0);
  const accommodationSubtotal = 665;
  const additionalSubtotal = 200;
  const total = servicesSubtotal + accommodationSubtotal + additionalSubtotal;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-10 px-4">
        {/* Quote Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="text-teal text-3xl">🦷</span>
            <span className="font-[var(--font-heading)] text-2xl text-charcoal">
              DentalAU
            </span>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-widest text-stone-gray font-semibold">
              Quote
            </p>
            <p className="text-sm text-charcoal mt-1">
              Quote #DT-2026-0042
            </p>
            <p className="text-sm text-stone-gray">Date: 18 April 2026</p>
            <p className="text-sm text-stone-gray">
              Valid Until: 18 May 2026
            </p>
          </div>
        </div>

        {/* Client Card */}
        <div className="bg-sand rounded-xl p-6 mt-8 border-l-4 border-teal">
          <p className="text-xs uppercase tracking-widest text-stone-gray font-semibold mb-2">
            Prepared For
          </p>
          <p className="text-lg font-semibold text-charcoal">
            Sarah Mitchell
          </p>
          <p className="text-sm text-stone-gray mt-1">
            sarah.m@email.com
          </p>
          <p className="text-sm text-stone-gray">+61 412 345 678</p>
        </div>

        {/* Dental Services */}
        <div className="mt-8">
          <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-4">
            Dental Services
          </h3>
          <div className="overflow-hidden rounded-xl border border-light-warm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-teal text-white">
                  <th className="text-left py-3 px-4 font-medium">Service</th>
                  <th className="text-left py-3 px-4 font-medium">Clinic</th>
                  <th className="text-left py-3 px-4 font-medium hidden sm:table-cell">
                    Description
                  </th>
                  <th className="text-right py-3 px-4 font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
                {dentalServices.map((d, i) => (
                  <tr
                    key={i}
                    className="border-t border-light-warm even:bg-sand/50"
                  >
                    <td className="py-3 px-4 font-medium text-charcoal">
                      {d.service}
                    </td>
                    <td className="py-3 px-4 text-stone-gray">{d.clinic}</td>
                    <td className="py-3 px-4 text-stone-gray hidden sm:table-cell">
                      {d.description}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-charcoal">
                      ${d.price.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-light-warm bg-sand/30">
                  <td
                    colSpan={3}
                    className="py-3 px-4 text-right font-medium text-charcoal"
                  >
                    Subtotal
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-charcoal">
                    ${servicesSubtotal.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Accommodation */}
        <div className="mt-8">
          <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-4">
            Accommodation
          </h3>
          <div className="bg-white rounded-xl border border-light-warm p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Hotel className="w-5 h-5 text-teal" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-charcoal">
                    The Nile Regency Hotel
                  </h4>
                  <span className="text-sm text-stone-gray">
                    ★★★★½
                  </span>
                </div>
                <p className="text-sm text-stone-gray mt-1">
                  Deluxe Double Room
                </p>
                <p className="text-sm text-stone-gray">
                  5&ndash;12 May 2026 &middot; 7 nights &middot; $95/night
                </p>
              </div>
              <p className="text-right font-semibold text-charcoal">
                $665
              </p>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-8">
          <h3 className="font-[var(--font-heading)] text-xl text-charcoal mb-4">
            Additional Services
          </h3>
          <div className="bg-white rounded-xl border border-light-warm divide-y divide-light-warm">
            {additionalServices.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-teal" />
                </div>
                <p className="flex-1 text-sm font-medium text-charcoal">
                  {s.label}
                </p>
                <p
                  className={`text-sm font-semibold ${typeof s.price === "string" ? "text-teal" : "text-charcoal"}`}
                >
                  {typeof s.price === "number"
                    ? `$${s.price}`
                    : s.price}
                </p>
              </div>
            ))}
            <div className="flex items-center justify-between p-4 bg-sand/30">
              <p className="text-sm font-medium text-charcoal">Subtotal</p>
              <p className="font-semibold text-charcoal">$200</p>
            </div>
          </div>
        </div>

        {/* Cost Summary */}
        <div className="mt-8 bg-sand rounded-xl p-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-gray">Dental Services</span>
              <span className="font-medium text-charcoal">
                ${servicesSubtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-gray">Accommodation</span>
              <span className="font-medium text-charcoal">
                ${accommodationSubtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-gray">Additional Services</span>
              <span className="font-medium text-charcoal">
                ${additionalSubtotal.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="border-t border-light-warm my-4" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-charcoal">TOTAL</span>
            <span className="text-3xl font-bold text-teal font-[var(--font-heading)]">
              ${total.toLocaleString()}
            </span>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-sm line-through text-stone-gray">
              Estimated Australian cost: $24,500
            </p>
            <p className="text-xl font-bold text-coral">
              Your Savings: $17,385 (71%)
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <h3 className="font-[var(--font-heading)] text-2xl text-charcoal mb-4">
            Happy with this quote?
          </h3>
          <button className="px-10 py-3 bg-coral text-white font-semibold rounded-lg hover:bg-coral/90 transition-colors shadow-[0_4px_12px_rgba(232,115,74,0.25)] text-lg">
            Approve &amp; Pay Now
          </button>
          <p className="text-sm text-stone-gray mt-3">
            Have questions? Contact us at{" "}
            <span className="text-teal">hello@dentalau.com.au</span> or call{" "}
            <span className="text-teal">+61 2 8000 1234</span>
          </p>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-12 pt-6 border-t border-light-warm text-center">
          <p className="text-xs text-stone-gray">
            This quote is an estimate and subject to change after clinical
            examination. Prices are in AUD. DentalAU Pty Ltd ABN 00 000 000
            000.
          </p>
        </div>
      </div>
    </div>
  );
}
