"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const fastSellingData = [
  { name: "Umbrellas", sales: 400 },
  { name: "Raincoats", sales: 300 },
  { name: "Water Bottles", sales: 200 },
  { name: "Notebooks", sales: 278 },
  { name: "Pens", sales: 189 },
];

const slowSellingData = [
  { name: "Staplers", sales: 20 },
  { name: "Rulers", sales: 15 },
  { name: "Erasers", sales: 10 },
  { name: "Clips", sales: 8 },
  { name: "Folders", sales: 5 },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

export function ChartsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Fast Selling Products</CardTitle>
          <CardDescription>Top performing items this month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "hsl(221 83% 53%)",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fastSellingData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="hsl(227.3684 79.1667% 37.6471%)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Slow Selling Products</CardTitle>
          <CardDescription>Items requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sales: {
                label: "Sales",
                color: "hsl(32 95% 44%)",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={slowSellingData}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="sales" fill="hsl(46.1538 74.0933% 62.1569%)" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Trend</CardTitle>
          <CardDescription>Monthly revenue over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              revenue: {
                label: "Revenue",
                color: "hsl(142 76% 36%)",
              },
            }}
            className="h-[200px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="hsl(227.3684 79.1667% 37.6471%)"
                  fill="hsl(227.3684 79.1667% 37.6471%)"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
