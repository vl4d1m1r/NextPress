"use client";
import { SxProps, Theme } from "@mui/material/styles";

export const textPillClass: SxProps<Theme> = (theme) => ({
  px: 1,
  color: theme.palette.warning.contrastText,
  background: theme.palette.warning.main,
  fontWeight: 600,
});
