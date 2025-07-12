import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeSelector } from "@/components/theme-selector";

interface DashboardHeaderProps {
  title: string;
}

export function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
              className="mr-2 data-[orientation=vertical]:h-4"
              orientation="vertical"
            />
      <h1 className="text-l font-semibold">{title}</h1>
    </header>
  );
}
