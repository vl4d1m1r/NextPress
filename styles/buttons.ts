"use client";
import { SxProps, Theme } from "@mui/material/styles";

export const buttonGeneralClass: SxProps<Theme> = (theme) => ({
  minWidth: "auto",
  padding: 1,
  backgroundColor: "rgba(0, 0, 0, 0.9)",
});

export const buttonCategoriesClass: SxProps<Theme> = (theme) => ({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
});
