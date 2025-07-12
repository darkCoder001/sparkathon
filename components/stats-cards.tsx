import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  Package,
  DollarSign,
  AlertTriangle,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Total Inventory Value",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Total Products",
    value: "2,350",
    description: "+180 new items",
    icon: Package,
    trend: "up",
  },
  {
    title: "Low Stock Alerts",
    value: "12",
    description: "Requires attention",
    icon: AlertTriangle,
    trend: "down",
  },
  {
    title: "Growth Rate",
    value: "+12.5%",
    description: "Steady performance increase",
    icon: BarChart3,
    trend: "up",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {stat.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
