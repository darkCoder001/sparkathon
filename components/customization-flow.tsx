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
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  X,
  CloudRain,
  Sun,
  GraduationCap,
  Calendar,
  Zap,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Condition {
  id: string;
  name: string;
  type: "weather" | "season" | "event";
  effect: "increase" | "decrease";
  percentage: number;
  products: string[];
  description: string;
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
    description: "Rainy weather increases demand for umbrellas and raincoats",
    icon: CloudRain,
  },
  {
    id: "2",
    name: "School Season",
    type: "season",
    effect: "increase",
    percentage: 20,
    products: ["Notebooks", "Pens", "Erasers", "Rulers"],
    description: "Back to school season boosts stationery sales",
    icon: GraduationCap,
  },
  {
    id: "3",
    name: "Summer Heat",
    type: "weather",
    effect: "increase",
    percentage: 10,
    products: ["Water Bottles"],
    description: "Hot weather increases demand for hydration products",
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
    description: "",
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
        return Zap;
      default:
        return CloudRain;
    }
  };

  const handleCreateCondition = () => {
    if (
      newCondition.name &&
      newCondition.products.length > 0 &&
      newCondition.description
    ) {
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
        description: "",
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "weather":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "season":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "event":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Price Customization Rules
          </h2>
          <p className="text-muted-foreground mt-2">
            Create and manage dynamic pricing conditions for your products
          </p>
        </div>
        <Button onClick={() => setIsCreating(true)} size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Condition
        </Button>
      </div>

      {isCreating && (
        <Card className="border-2 border-dashed border-primary/20">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Create New Pricing Condition
            </CardTitle>
            <CardDescription>
              Define a new pricing rule based on market conditions and external
              factors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
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
                  placeholder="e.g., Heavy Rain, Holiday Season"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="condition-type">Category</Label>
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
                    <SelectItem value="weather">🌤️ Weather</SelectItem>
                    <SelectItem value="season">📅 Season</SelectItem>
                    <SelectItem value="event">🎉 Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newCondition.description}
                onChange={(e) =>
                  setNewCondition((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Describe how this condition affects pricing..."
                className="min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="effect">Price Effect</Label>
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
                    <SelectItem value="increase">📈 Increase Price</SelectItem>
                    <SelectItem value="decrease">📉 Decrease Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="percentage">Percentage Change (%)</Label>
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
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Affected Products</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableProducts.map((product) => (
                  <div
                    key={product}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                      newCondition.products.includes(product)
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => toggleProduct(product)}
                  >
                    <div className="text-sm text-center">{product}</div>
                  </div>
                ))}
              </div>
              {newCondition.products.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {newCondition.products.map((product) => (
                    <Badge key={product} variant="secondary" className="gap-1">
                      {product}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProduct(product);
                        }}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <Button onClick={handleCreateCondition} className="flex-1">
                Create Condition
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsCreating(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {conditions.map((condition) => (
          <Card
            key={condition.id}
            className="relative group hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <condition.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{condition.name}</CardTitle>
                    <Badge
                      className={`mt-1 ${getTypeColor(condition.type)}`}
                      variant="secondary"
                    >
                      {condition.type}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDeleteCondition(condition.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {condition.description}
              </p>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium">Price Effect:</span>
                <Badge
                  variant={
                    condition.effect === "increase" ? "default" : "secondary"
                  }
                  className="gap-1"
                >
                  {condition.effect === "increase" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {condition.effect === "increase" ? "+" : "-"}
                  {condition.percentage}%
                </Badge>
              </div>

              <div className="space-y-2">
                <span className="text-sm font-medium">Affected Products:</span>
                <div className="flex flex-wrap gap-1">
                  {condition.products.map((product) => (
                    <Badge key={product} variant="outline" className="text-xs">
                      {product}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {conditions.length === 0 && !isCreating && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              No pricing conditions yet
            </h3>
            <p className="text-muted-foreground mb-4">
              Create your first dynamic pricing rule to get started
            </p>
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create First Condition
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
