import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar active="inquiries" />
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
