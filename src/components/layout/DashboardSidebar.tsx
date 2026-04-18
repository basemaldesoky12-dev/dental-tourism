import Link from "next/link";
import { LayoutDashboard, FileText, Users, Settings } from "lucide-react";

const navItems = [
  { label: "Inquiries", href: "/dashboard", icon: LayoutDashboard, key: "inquiries" },
  { label: "Quotes", href: "/dashboard/quotes/new", icon: FileText, key: "quotes" },
  { label: "Clients", href: "/dashboard", icon: Users, key: "clients" },
  { label: "Settings", href: "/dashboard", icon: Settings, key: "settings" },
];

interface DashboardSidebarProps {
  active?: string;
}

export default function DashboardSidebar({ active = "inquiries" }: DashboardSidebarProps) {
  return (
    <aside className="w-60 bg-night-navy min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🦷</span>
          <span className="font-[var(--font-heading)] text-lg text-white">
            DentalAU
          </span>
        </Link>
        <p className="text-[10px] uppercase tracking-[0.2em] text-teal-bright mt-1 pl-9">
          Clinical Concierge
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        {navItems.map((item) => {
          const isActive = active === item.key;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "border-l-3 border-teal bg-white/5 text-teal-bright"
                  : "text-stone-gray hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-6 py-5 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-teal w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
            AT
          </div>
          <div>
            <p className="text-sm font-medium text-white">Alex Thompson</p>
            <p className="text-xs text-stone-gray">Sales Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
