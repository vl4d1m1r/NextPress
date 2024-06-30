"use client";
import { SxProps, Theme } from "@mui/material/styles";
import { dividerGray } from "@/theme/colors";

/*
export const exampleClass: SxProps<Theme> = (theme) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'transparent',
  background: theme.palette.primary.main,
});
*/

export const headerWrapperClass: SxProps<Theme> = (theme) => ({
  position: "absolute",
  width: "100%",
  backgroundColor: "transparent",
  zIndex: 1,
});

export const headerContainerClass: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  p: 2,
  borderBottom: `1px solid ${theme.palette.grey[dividerGray]}`,
  backgroundColor: "transparent",
});

export const heroWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  height: "50vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
  },
});

export const sectionDividerClass: SxProps<Theme> = (theme) => ({
  width: "100%",
  pt: 4,
  mb: 4,
  borderBottom: `1px solid ${theme.palette.grey[dividerGray]}`,
});

export const postsImageWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  pt: "60.25%",
  overflow: "hidden",
  mr: { xs: 0, sm: 4 },
});

export const searchWrapperClass: SxProps<Theme> = (theme) => ({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: "100%",
  border: `1px solid ${theme.palette.grey[dividerGray]}`,
  borderRadius: 2,
});

export const tagsWrapperClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  gap: 2,
  flexWrap: "wrap",
});

export const tagsChipsClass: SxProps<Theme> = (theme) => ({
  px: 2,
  py: 1,
  border: `1px solid ${theme.palette.grey[dividerGray]}`,
  borderRadius: 1,
});

export const highlightsWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  gap: 2,
});

export const highlightsHeadlineClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  mb: 2,
});

export const imageWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  pt: "60.25%",
  overflow: "hidden",
});
