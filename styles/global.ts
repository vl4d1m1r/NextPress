"use client";
import { SxProps, Theme } from "@mui/material/styles";

export const centerClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const alignBaselineClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "baseline",
});

export const centerVerticalClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
});

export const centerVerticalRightClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
});

export const centerHorizontalClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  justifyContent: "center",
});
