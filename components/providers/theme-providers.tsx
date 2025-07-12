"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { ThemeConfigProvider } from "@/components/active-theme";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeConfigProvider>{children}</ThemeConfigProvider>
    </NextThemesProvider>
  );
}
