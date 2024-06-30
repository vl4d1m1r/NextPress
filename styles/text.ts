"use client";
import { SxProps, Theme } from "@mui/material/styles";

export const textPillClass: SxProps<Theme> = (theme) => ({
  px: 1,
  color: "white",
  background: theme.palette.primary.main,
});
