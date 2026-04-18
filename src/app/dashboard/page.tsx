import {
  Search,
  SlidersHorizontal,
  TrendingUp,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const stats = [
  { label: "Total Inquiries", value: "47", trend: "+12%", trendColor: "text-green-600" },
  { label: "Pending Quotes", value: "13", trend: null, trendColor: "" },
  { label: "Quotes Sent", value: "28", trend: null, trendColor: "" },
  { label: "Revenue Pipeline", value: "$186k", trend: "+23%", trendColor: "text-green-600" },
];

const inquiries = [
  {
    name: "Sarah Mitchell",
    contact: "sarah.m@email.com",
    services: "Implants, Veneers",
    date: "18 Apr 2026",
    status: "New",
    statusClasses: "bg-blue-50 text-blue-600",
    actions: [
      { label: "View", style: "text" },
      { label: "Create Quote", style: "teal" },
    ],
  },
  {
    name: "James Cooper",
    contact: "james.c@email.com",
    services: "Implants",
    date: "17 Apr 2026",
    status: "In Progress",
    statusClasses: "bg-amber-50 text-amber-600",
    actions: [
      { label: "View", style: "text" },
      { label: "Edit Quote", style: "text" },
    ],
  },
  {
    name: "Emma Watson",
    contact: "emma.w@email.com",
    services: "Crowns, Whitening",
    date: "15 Apr 2026",
    status: "Quoted",
    statusClasses: "bg-green-50 text-green-600",
    actions: [
      { label: "View", style: "text" },
      { label: "Send Payment", style: "coral" },
    ],
  },
  {
    name: "David Chen",
    contact: "david.c@email.com",
    services: "Implants",
    date: "14 Apr 2026",
    status: "Paid",
    statusClasses: "bg-emerald-50 text-emerald-700",
    actions: [{ label: "View", style: "text" }],
  },
  {
    name: "Lisa Park",
    contact: "lisa.p@email.com",
    services: "Veneers, Crowns",
    date: "12 Apr 2026",
    status: "Quoted",
    statusClasses: "bg-green-50 text-green-600",
    actions: [
      { label: "View", style: "text" },
      { label: "Send Payment", style: "coral" },
    ],
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="font-[var(--font-heading)] text-2xl text-charcoal">
          Inquiries
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-gray" />
            <input
              type="text"
              placeholder="Search inquiries..."
              className="h-10 pl-10 pr-4 border border-light-warm rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-white w-56"
            />
          </div>
          <button className="h-10 px-4 border border-light-warm rounded-lg text-sm text-charcoal hover:bg-sand transition-colors flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          <button className="h-10 px-4 bg-coral text-white text-sm font-semibold rounded-lg hover:bg-coral/90 transition-colors">
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <p className="text-3xl font-bold text-charcoal">{s.value}</p>
            <p className="text-sm text-stone-gray mt-1">{s.label}</p>
            {s.trend && (
              <p className={`text-sm ${s.trendColor} mt-1 flex items-center gap-1`}>
                <TrendingUp className="w-3.5 h-3.5" />
                {s.trend}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-light-warm">
                <th className="text-left py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Client
                </th>
                <th className="text-left py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium hidden md:table-cell">
                  Contact
                </th>
                <th className="text-left py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Services
                </th>
                <th className="text-left py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium hidden sm:table-cell">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Status
                </th>
                <th className="text-right py-3 px-4 text-xs uppercase text-stone-gray tracking-wider font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inq, i) => (
                <tr
                  key={i}
                  className="border-b border-light-warm last:border-0 hover:bg-sand/30 transition-colors"
                >
                  <td className="py-3.5 px-4 font-medium text-charcoal">
                    {inq.name}
                  </td>
                  <td className="py-3.5 px-4 text-stone-gray hidden md:table-cell">
                    {inq.contact}
                  </td>
                  <td className="py-3.5 px-4 text-charcoal">{inq.services}</td>
                  <td className="py-3.5 px-4 text-stone-gray hidden sm:table-cell">
                    {inq.date}
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${inq.statusClasses}`}
                    >
                      {inq.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {inq.actions.map((action, j) => {
                        if (action.style === "teal") {
                          return (
                            <button
                              key={j}
                              className="px-3 py-1.5 bg-teal text-white text-xs font-medium rounded-md hover:bg-teal/90 transition-colors"
                            >
                              {action.label}
                            </button>
                          );
                        }
                        if (action.style === "coral") {
                          return (
                            <button
                              key={j}
                              className="px-3 py-1.5 bg-coral text-white text-xs font-medium rounded-md hover:bg-coral/90 transition-colors"
                            >
                              {action.label}
                            </button>
                          );
                        }
                        return (
                          <button
                            key={j}
                            className="px-3 py-1.5 text-xs font-medium text-stone-gray hover:text-charcoal transition-colors flex items-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            {action.label}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-light-warm">
          <p className="text-sm text-stone-gray">
            Showing 1&ndash;10 of 47 inquiries
          </p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-teal text-white text-sm font-medium">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand text-sm transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand text-sm transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand text-sm transition-colors">
              4
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand text-sm transition-colors">
              5
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded text-stone-gray hover:bg-sand transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
