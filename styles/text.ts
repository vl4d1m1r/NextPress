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

export const textPostsHeadlineClass: SxProps<Theme> = (theme) => ({
  fontWeight: 700,
});

export const textPostsContentClass: SxProps<Theme> = (theme) => ({
  fontWeight: 700,
  color: theme.palette.mode === "dark" ? theme.palette.grey[500] : theme.palette.grey[600],
});
