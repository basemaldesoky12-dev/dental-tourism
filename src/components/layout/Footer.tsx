import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-night-navy text-soft-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-teal-bright text-2xl">🦷</span>
              <span className="font-[var(--font-heading)] text-xl text-white">
                DentalAU
              </span>
            </div>
            <p className="text-sm text-stone-gray leading-relaxed">
              Leading the way in premium, affordable dental tourism for
              Australians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Services", "How It Works", "Accommodation", "Testimonials"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                      className="text-stone-gray hover:text-teal-bright transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              {["Privacy Policy", "Terms of Service", "Medical Disclaimer"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-stone-gray hover:text-teal-bright transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-stone-gray">
                <Phone size={16} className="text-teal-bright" />
                +61 400 000 000
              </li>
              <li className="flex items-center gap-2 text-stone-gray">
                <Mail size={16} className="text-teal-bright" />
                concierge@dentalau.com
              </li>
              <li className="flex items-start gap-2 text-stone-gray">
                <MapPin size={16} className="text-teal-bright mt-0.5" />
                123 Collins St, Melbourne VIC 3000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-stone-gray">
          <p>
            &copy; {new Date().getFullYear()} DentalAU. All rights reserved.
            ABN 12 345 678 901.
          </p>
          <p className="mt-2 leading-relaxed">
            Medical Disclaimer: Results may vary. All dental procedures carry
            inherent risks. Consult your local dentist for a comprehensive
            assessment before traveling for dental treatment. DentalAU acts as a
            concierge service and is not a medical provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
