import { DashboardHeader } from "@/components/sidebar/dashboard-header";
import { ProductsTable } from "@/components/products-table";

export default function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <DashboardHeader title="Products" />
      <ProductsTable />
    </div>
  );
}
