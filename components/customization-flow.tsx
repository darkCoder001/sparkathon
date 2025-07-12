"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X, CloudRain, Sun, GraduationCap, Calendar } from "lucide-react";

interface Condition {
  id: string;
  name: string;
  type: "weather" | "season" | "event";
  effect: "increase" | "decrease";
  percentage: number;
  products: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const defaultConditions: Condition[] = [
  {
    id: "1",
    name: "Rainfall",
    type: "weather",
    effect: "increase",
    percentage: 15,
    products: ["Umbrellas", "Raincoats"],
    icon: CloudRain,
  },
  {
    id: "2",
    name: "School Season",
    type: "season",
    effect: "increase",
    percentage: 20,
    products: ["Notebooks", "Pens", "Erasers", "Rulers"],
    icon: GraduationCap,
  },
  {
    id: "3",
    name: "Summer Heat",
    type: "weather",
    effect: "increase",
    percentage: 10,
    products: ["Water Bottles"],
    icon: Sun,
  },
];

export function CustomizationFlow() {
  const [conditions, setConditions] =
    React.useState<Condition[]>(defaultConditions);
  const [isCreating, setIsCreating] = React.useState(false);
  const [newCondition, setNewCondition] = React.useState({
    name: "",
    type: "weather" as const,
    effect: "increase" as const,
    percentage: 10,
    products: [] as string[],
  });

  const availableProducts = [
    "Umbrellas",
    "Raincoats",
    "Pens",
    "Notebooks",
    "Water Bottles",
    "Staplers",
    "Rulers",
    "Erasers",
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "weather":
        return CloudRain;
      case "season":
        return Calendar;
      case "event":
        return GraduationCap;
      default:
        return CloudRain;
    }
  };

  const handleCreateCondition = () => {
    if (newCondition.name && newCondition.products.length > 0) {
      const condition: Condition = {
        id: Date.now().toString(),
        ...newCondition,
        icon: getIcon(newCondition.type),
      };
      setConditions([...conditions, condition]);
      setNewCondition({
        name: "",
        type: "weather",
        effect: "increase",
        percentage: 10,
        products: [],
      });
      setIsCreating(false);
    }
  };

  const handleDeleteCondition = (id: string) => {
    setConditions(conditions.filter((c) => c.id !== id));
  };

  const toggleProduct = (product: string) => {
    setNewCondition((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Price Customization Rules</h2>
          <p className="text-muted-foreground">
            Create and manage dynamic pricing conditions for your products
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Condition
        </Button>
      </div>

      {isCreating && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Condition</CardTitle>
            <CardDescription>
              Define a new pricing rule based on market conditions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="condition-name">Condition Name</Label>
                <Input
                  id="condition-name"
                  value={newCondition.name}
                  onChange={(e) =>
                    setNewCondition((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  placeholder="e.g., Heavy Rain"
                />
              </div>
              <div>
                <Label htmlFor="condition-type">Type</Label>
                <Select
                  value={newCondition.type}
                  onValueChange={(value: "weather" | "season" | "event") =>
                    setNewCondition((prev: any) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="season">Season</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="effect">Effect</Label>
                <Select
                  value={newCondition.effect}
                  onValueChange={(value: "increase" | "decrease") =>
                    setNewCondition((prev: any) => ({ ...prev, effect: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="increase">Increase Price</SelectItem>
                    <SelectItem value="decrease">Decrease Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="percentage">Percentage (%)</Label>
                <Input
                  id="percentage"
                  type="number"
                  value={newCondition.percentage}
                  onChange={(e) =>
                    setNewCondition((prev) => ({
                      ...prev,
                      percentage: Number.parseInt(e.target.value),
                    }))
                  }
                  min="1"
                  max="100"
                />
              </div>
            </div>

            <div>
              <Label>Affected Products</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {availableProducts.map((product) => (
                  <div
                    key={product}
                    className={`p-2 border rounded cursor-pointer transition-colors ${
                      newCondition.products.includes(product)
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => toggleProduct(product)}
                  >
                    {product}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCreateCondition}>Create Condition</Button>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {conditions.map((condition) => (
          <Card key={condition.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <condition.icon className="h-5 w-5" />
                <CardTitle className="text-base">{condition.name}</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleDeleteCondition(condition.id)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Effect:</span>
                  <Badge
                    variant={
                      condition.effect === "increase" ? "default" : "secondary"
                    }
                  >
                    {condition.effect === "increase" ? "+" : "-"}
                    {condition.percentage}%
                  </Badge>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">
                    Products:
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {condition.products.map((product) => (
                      <Badge
                        key={product}
                        variant="outline"
                        className="text-xs"
                      >
                        {product}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
