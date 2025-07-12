import { DashboardHeader } from "@/components/sidebar/dashboard-header";
import { StatsCards } from "@/components/stats-cards";
import { ChartsSection } from "@/components/charts-section";
import { AlertsSection } from "@/components/alerts-section";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <DashboardHeader title="Home" />
      <StatsCards />
      <ChartsSection />
      <AlertsSection />
    </div>
  );
}
