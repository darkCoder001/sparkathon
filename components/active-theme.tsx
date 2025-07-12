"use client";

import * as React from "react";

type Theme =
  | "default"
  | "blue"
  | "green"
  | "amber"
  | "default-scaled"
  | "blue-scaled"
  | "mono-scaled";

interface ThemeConfig {
  activeTheme: Theme;
  setActiveTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeConfig | undefined>(undefined);

export function ThemeConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTheme, setActiveTheme] = React.useState<Theme>("blue");

  React.useEffect(() => {
    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove(
      "theme-default",
      "theme-blue",
      "theme-green",
      "theme-amber",
      "theme-default-scaled",
      "theme-blue-scaled",
      "theme-mono-scaled"
    );

    // Add current theme class
    root.classList.add(`theme-${activeTheme}`);
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within a ThemeConfigProvider");
  }
  return context;
}
