"use client";
import React from "react";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { toggleTheme, theme } = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
}
