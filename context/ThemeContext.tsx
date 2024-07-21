"use client";
import { themeConfig } from "@/models/config";
import { darkTheme, lightTheme } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface ThemeContextProps {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  /*
  let myTheme = themeConfig.defaultTheme;
  if (typeof window !== "undefined") {
    const themeSavedInLocalStorage = window.localStorage.getItem(themeConfig.localStorageName) as "light" | "dark";
    myTheme = themeSavedInLocalStorage ? themeSavedInLocalStorage : themeConfig.defaultTheme;
  }
    */

  const [theme, setTheme] = useState<"light" | "dark">(themeConfig.defaultTheme);

  useEffect(() => {
    let theme = localStorage.getItem(themeConfig.localStorageName) as "light" | "dark";
    if (!theme) theme = themeConfig.defaultTheme;
    setTheme(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(themeConfig.localStorageName, newTheme);
  };

  const value = useMemo(() => ({ toggleTheme, theme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
