"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CloudRain,
  GraduationCap,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import type { Product } from "./products-table";

interface EditProductSheetProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const conditions = [
  {
    name: "Rainfall",
    icon: CloudRain,
    effect: "increase",
    percentage: 15,
    description: "Rainy weather increases demand for umbrellas and raincoats",
    emoji: "🌧️",
  },
  {
    name: "School Time",
    icon: GraduationCap,
    effect: "increase",
    percentage: 20,
    description: "Back to school season boosts stationery sales",
    emoji: "🎒",
  },
];

export function EditProductSheet({
  product,
  open,
  onOpenChange,
}: EditProductSheetProps) {
  const [adjustedPrice, setAdjustedPrice] = React.useState(0);

  React.useEffect(() => {
    if (product) {
      setAdjustedPrice(product.adjustedPrice);
    }
  }, [product]);

  if (!product) return null;

  const suggestedPrice = product.currentPrice * 1.1; // 10% markup as suggestion
  const applicableConditions = conditions.filter((condition) => {
    if (
      condition.name === "Rainfall" &&
      (product.name === "Umbrellas" || product.name === "Raincoats")
    ) {
      return true;
    }
    if (condition.name === "School Time" && product.category === "Stationery") {
      return true;
    }
    return false;
  });

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Edit Product: {product.name}</SheetTitle>
          <SheetDescription>
            Adjust pricing and view market conditions affecting this product.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="current-price" className="text-right">
              Current Price
            </Label>
            <Input
              id="current-price"
              value={`$${product.currentPrice.toFixed(2)}`}
              className="col-span-3"
              disabled
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="adjusted-price" className="text-right">
              Adjusted Price
            </Label>
            <Input
              id="adjusted-price"
              type="number"
              step="0.01"
              value={adjustedPrice}
              onChange={(e) =>
                setAdjustedPrice(Number.parseFloat(e.target.value))
              }
              className="col-span-3"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Suggested Price</CardTitle>
              <CardDescription>
                Based on market analysis and demand patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ${suggestedPrice.toFixed(2)}
              </div>
              <p className="text-sm text-muted-foreground">
                +
                {(
                  ((suggestedPrice - product.currentPrice) /
                    product.currentPrice) *
                  100
                ).toFixed(1)}
                % from current price
              </p>
            </CardContent>
          </Card>

          {applicableConditions.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Market Conditions</CardTitle>
                <CardDescription>
                  Factors affecting pricing for this product
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {applicableConditions.map((condition) => (
                  <div
                    key={condition.name}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{condition.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <condition.icon className="h-4 w-4" />
                          <span className="font-medium">{condition.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {condition.description}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        condition.effect === "increase"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {condition.effect === "increase" ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      +{condition.percentage}%
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <SheetFooter>
          <Button type="submit" onClick={() => onOpenChange(false)}>
            Save Changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
