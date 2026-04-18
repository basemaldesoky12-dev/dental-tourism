"use client";

import { X, Plus, ChevronRight } from "lucide-react";
import Link from "next/link";

const dentalRows = [
  {
    service: "Dental Implant",
    clinic: "Cairo Dental Excellence",
    description: "Premium titanium implants with porcelain crowns",
    unitPrice: 1800,
    qty: 2,
  },
  {
    service: "Porcelain Veneers",
    clinic: "Smile Studio Cairo",
    description: "E-max porcelain veneers, custom shade-matched",
    unitPrice: 600,
    qty: 4,
  },
  {
    service: "Teeth Whitening",
    clinic: "Cairo Dental Excellence",
    description: "In-office professional whitening treatment",
    unitPrice: 250,
    qty: 1,
  },
];

const additionalCosts = [
  { label: "Airport Transfer (Return)", amount: 80 },
  { label: "Local Transport (7 days)", amount: 120 },
];

export default function NewQuotePage() {
  const servicesSubtotal = dentalRows.reduce(
    (sum, r) => sum + r.unitPrice * r.qty,
    0
  );
  const accommodationSubtotal = 665;
  const additionalSubtotal = additionalCosts.reduce(
    (sum, c) => sum + c.amount,
    0
  );
  const discount = 100;
  const grandTotal =
    servicesSubtotal + accommodationSubtotal + additionalSubtotal - discount;

  return (
    <div className="p-6 lg:p-8 pb-28">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-sm text-stone-gray flex items-center gap-1">
            Quotes <ChevronRight className="w-3.5 h-3.5" /> New Quote
          </p>
          <h1 className="font-[var(--font-heading)] text-2xl text-charcoal mt-1">
            Create Quote
          </h1>
        </div>
        <Link
          href="/dashboard"
          className="text-sm text-teal font-medium hover:underline"
        >
          &larr; Back to Inquiries
        </Link>
      </div>

      {/* Client Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-[var(--font-heading)] text-lg text-charcoal">
            Client Information
          </h3>
          <Link
            href="#"
            className="text-sm text-teal font-medium hover:underline"
          >
            View original inquiry &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Sarah Mitchell"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Email
            </label>
            <input
              type="email"
              defaultValue="sarah.m@email.com"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+61 412 345 678"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Travel Dates
            </label>
            <input
              type="text"
              defaultValue="5–12 May 2026"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white"
            />
          </div>
        </div>
      </div>

      {/* Dental Services */}
      <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-[var(--font-heading)] text-lg text-charcoal">
            Dental Services
          </h3>
          <button className="text-sm text-teal font-medium hover:underline flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add Service
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-light-warm">
                <th className="text-left py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Service
                </th>
                <th className="text-left py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Clinic
                </th>
                <th className="text-left py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium hidden lg:table-cell">
                  Description
                </th>
                <th className="text-right py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Unit Price
                </th>
                <th className="text-center py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Qty
                </th>
                <th className="text-right py-3 px-3 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Subtotal
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {dentalRows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-light-warm last:border-0"
                >
                  <td className="py-3 px-3">
                    <input
                      type="text"
                      defaultValue={row.service}
                      className="w-full h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="text"
                      defaultValue={row.clinic}
                      className="w-full h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
                    />
                  </td>
                  <td className="py-3 px-3 hidden lg:table-cell">
                    <input
                      type="text"
                      defaultValue={row.description}
                      className="w-full h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="number"
                      defaultValue={row.unitPrice}
                      className="w-24 h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm text-right ml-auto block"
                    />
                  </td>
                  <td className="py-3 px-3">
                    <input
                      type="number"
                      defaultValue={row.qty}
                      className="w-16 h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm text-center mx-auto block"
                    />
                  </td>
                  <td className="py-3 px-3 text-right font-medium text-charcoal">
                    ${(row.unitPrice * row.qty).toLocaleString()}
                  </td>
                  <td className="py-3 px-1">
                    <button className="w-8 h-8 flex items-center justify-center text-stone-gray hover:text-red-500 transition-colors rounded hover:bg-red-50">
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4 pt-4 border-t border-light-warm">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-stone-gray">
              Services Subtotal
            </span>
            <span className="text-lg font-semibold text-charcoal">
              ${servicesSubtotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Accommodation */}
      <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
        <h3 className="font-[var(--font-heading)] text-lg text-charcoal mb-4">
          Accommodation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="lg:col-span-2">
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Hotel Name
            </label>
            <select className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm">
              <option>The Nile Regency Hotel</option>
              <option>Cairo Grand Hyatt</option>
              <option>Marriott Mena House</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Room Type
            </label>
            <input
              type="text"
              defaultValue="Deluxe Double"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Check-in
            </label>
            <input
              type="text"
              defaultValue="5 May 2026"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-charcoal mb-1.5 block">
              Check-out
            </label>
            <input
              type="text"
              defaultValue="12 May 2026"
              className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-charcoal mb-1.5 block">
                Nights
              </label>
              <input
                type="number"
                value={7}
                readOnly
                className="w-full h-12 border border-light-warm rounded-lg px-4 bg-gray-50 text-sm text-stone-gray"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-charcoal mb-1.5 block">
                Rate
              </label>
              <input
                type="text"
                defaultValue="$95"
                className="w-full h-12 border border-light-warm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4 pt-4 border-t border-light-warm">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-stone-gray">
              Subtotal
            </span>
            <span className="text-lg font-semibold text-charcoal">$665</span>
          </div>
        </div>
      </div>

      {/* Additional Costs */}
      <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-[var(--font-heading)] text-lg text-charcoal">
            Additional Costs
          </h3>
          <button className="text-sm text-teal font-medium hover:underline flex items-center gap-1">
            <Plus className="w-4 h-4" /> Add Cost
          </button>
        </div>
        <div className="space-y-3">
          {additionalCosts.map((cost, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 border border-light-warm rounded-lg"
            >
              <input
                type="text"
                defaultValue={cost.label}
                className="flex-1 h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm"
              />
              <input
                type="number"
                defaultValue={cost.amount}
                className="w-28 h-10 border border-light-warm rounded-lg px-3 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm text-right"
              />
              <button className="w-8 h-8 flex items-center justify-center text-stone-gray hover:text-red-500 transition-colors rounded hover:bg-red-50">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 pt-4 border-t border-light-warm">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-stone-gray">
              Subtotal
            </span>
            <span className="text-lg font-semibold text-charcoal">
              ${additionalSubtotal}
            </span>
          </div>
        </div>
      </div>

      {/* Totals */}
      <div className="bg-sand rounded-xl p-6 mt-6">
        <div className="space-y-2 text-sm max-w-sm ml-auto">
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
            <span className="text-stone-gray">Additional Costs</span>
            <span className="font-medium text-charcoal">
              ${additionalSubtotal}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-stone-gray">Discount</span>
            <div className="flex items-center gap-1">
              <span className="text-stone-gray">-$</span>
              <input
                type="number"
                defaultValue={discount}
                className="w-20 h-8 border border-light-warm rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-teal bg-white text-sm text-right"
              />
            </div>
          </div>
          <div className="border-t border-light-warm my-3" />
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-charcoal">
              GRAND TOTAL
            </span>
            <span className="text-3xl font-bold text-teal font-[var(--font-heading)]">
              ${grandTotal.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="mt-6 sticky bottom-0 bg-white border-t border-light-warm p-4 -mx-6 lg:-mx-8 px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button className="h-10 px-6 border border-light-warm rounded-lg text-sm font-medium text-charcoal hover:bg-sand transition-colors">
          Save Draft
        </button>
        <div className="flex items-center gap-3">
          <button className="h-10 px-6 border border-teal text-teal rounded-lg text-sm font-medium hover:bg-teal/5 transition-colors">
            Preview Quote
          </button>
          <button className="h-10 px-6 bg-teal text-white rounded-lg text-sm font-semibold hover:bg-teal/90 transition-colors">
            Send Quote to Client
          </button>
          <button className="h-10 px-6 bg-coral text-white rounded-lg text-sm font-semibold hover:bg-coral/90 transition-colors shadow-[0_4px_12px_rgba(232,115,74,0.25)]">
            Send Payment Link
          </button>
        </div>
      </div>
    </div>
  );
}
