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

export const shareTextWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  backgroundColor: "transparent",
  border: "1px solid #fff",
  borderRadius: "5px",
  padding: "10px",
  width: "fit-content",
  margin: "50px",
  "&::after": {
    content: '""',
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "8px 0 8px 10px",
    borderColor: "transparent transparent transparent #fff",
    top: "50%",
    right: "-10px",
    transform: "translateY(-50%)",
    zIndex: 1, // Ensure triangle is above the bubble border
  },
});
