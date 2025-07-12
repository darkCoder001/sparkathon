import { DashboardHeader } from "@/components/dashboard-header";
import { CustomizationFlow } from "@/components/customization-flow";

export default function CustomizationPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <DashboardHeader title="Customization" />
      <CustomizationFlow />
    </div>
  );
}
