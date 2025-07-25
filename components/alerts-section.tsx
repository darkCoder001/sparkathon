import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lowStockItems = [
  { name: "Umbrellas", stock: 5, threshold: 20 },
  { name: "Raincoats", stock: 8, threshold: 15 },
  { name: "Cheese", stock: 12, threshold: 25 },
  { name: "Milk", stock: 5, threshold: 20 },
  { name: "Eggs", stock: 8, threshold: 15 },
  
];

const topRevenueGenerators = [
  { name: "Notebooks", revenue: 15420, percentage: 28 },
  { name: "Pens", revenue: 12350, percentage: 22 },
  { name: "Water Bottles", revenue: 9870, percentage: 18 },
  { name: "Cycles", revenue: 15420, percentage: 28 },
  { name: "Bags", revenue: 12350, percentage: 22 },
  
];

export function AlertsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Low Stock Alerts
          </CardTitle>
          <CardDescription>Items running low on inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {lowStockItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.stock} units remaining
                  </p>
                </div>
                <Badge variant="destructive">Low Stock</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Top Revenue Generators
          </CardTitle>
          <CardDescription>Highest earning products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topRevenueGenerators.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.revenue.toLocaleString()}
                  </p>
                </div>
                <Badge variant="secondary">{item.percentage}%</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
