"use client";
import { SxProps, Theme } from "@mui/material/styles";

export const textPillClass: SxProps<Theme> = (theme) => ({
  px: 1,
  color: theme.palette.warning.contrastText,
  background: theme.palette.warning.main,
  fontWeight: 600,
});

export const textBackdropInfoClass: SxProps<Theme> = (theme) => ({
  fontSize: { xs: "2rem", sm: "3rem" },
  fontWeight: { xs: 700, sm: 800 },
});
