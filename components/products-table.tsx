"use client";

import * as React from "react";
import { MoreHorizontal, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { EditProductSheet } from "@/components/edit-product-sheet";

export interface Product {
  id: string;
  name: string;
  stock: number;
  currentPrice: number;
  adjustedPrice: number;
  category: string;
}

const initialProducts: Product[] = [
  {
    id: "1",
    name: "Umbrellas",
    stock: 45,
    currentPrice: 25.99,
    adjustedPrice: 29.99,
    category: "Weather Protection",
  },
  {
    id: "2",
    name: "Raincoats",
    stock: 23,
    currentPrice: 49.99,
    adjustedPrice: 54.99,
    category: "Weather Protection",
  },
  {
    id: "3",
    name: "Pens",
    stock: 150,
    currentPrice: 2.99,
    adjustedPrice: 2.99,
    category: "Stationery",
  },
  {
    id: "4",
    name: "Notebooks",
    stock: 89,
    currentPrice: 12.99,
    adjustedPrice: 15.99,
    category: "Stationery",
  },
  {
    id: "5",
    name: "Water Bottles",
    stock: 67,
    currentPrice: 18.99,
    adjustedPrice: 18.99,
    category: "Hydration",
  },
  {
    id: "6",
    name: "Staplers",
    stock: 34,
    currentPrice: 15.99,
    adjustedPrice: 15.99,
    category: "Office Supplies",
  },
  {
    id: "7",
    name: "Rulers",
    stock: 78,
    currentPrice: 3.99,
    adjustedPrice: 3.99,
    category: "Stationery",
  },
  {
    id: "8",
    name: "Erasers",
    stock: 120,
    currentPrice: 1.99,
    adjustedPrice: 1.99,
    category: "Stationery",
  },
];

export function ProductsTable() {
  const [products, setProducts] = React.useState<Product[]>(initialProducts);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [isEditOpen, setIsEditOpen] = React.useState(false);

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsEditOpen(true);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const getStockStatus = (stock: number) => {
    if (stock < 20)
      return { label: "Low Stock", variant: "destructive" as const };
    if (stock < 50)
      return { label: "Medium Stock", variant: "secondary" as const };
    return { label: "In Stock", variant: "default" as const };
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Products Inventory</CardTitle>
          <CardDescription>
            Manage your product inventory and pricing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product Name</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Adjusted Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                const stockStatus = getStockStatus(product.stock);
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{product.stock}</span>
                        <Badge variant={stockStatus.variant}>
                          {stockStatus.label}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>${product.currentPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      <span
                        className={
                          product.adjustedPrice !== product.currentPrice
                            ? "text-orange-500 font-medium"
                            : ""
                        }
                      >
                        ${product.adjustedPrice.toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleEditProduct(product)}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Product
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <EditProductSheet
        product={selectedProduct}
        open={isEditOpen}
        onOpenChange={setIsEditOpen}
        onUpdateProduct={handleUpdateProduct}
      />
    </>
  );
}
