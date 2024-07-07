"use client";
import { SxProps, Theme } from "@mui/material/styles";
import { dividerGray } from "@/theme/colors";

/*
export const exampleClass: SxProps<Theme> = (theme) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'transparent',
  background: theme.palette.primary.main,
});
*/

export const containerClass: SxProps<Theme> = (theme) => ({
  width: "100%",
  marginLeft: "auto",
  boxSizing: "border-box",
  marginRight: "auto",
  paddingLeft: "16px",
  paddingRight: "16px",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "24px",
    paddingRight: "24px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1200px",
  },
});

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

export const headerSecondaryLogosClass: SxProps<Theme> = (theme) => ({
  display: { xs: "none", md: "flex" },
  alignItems: "center",
});

export const headerRightSideDesktopClass: SxProps<Theme> = (theme) => ({
  display: { xs: "none", md: "flex" },
  alignItems: "center",
});

export const headerRightSideMobileClass: SxProps<Theme> = (theme) => ({
  display: { xs: "flex", md: "none" },
  alignItems: "center",
});

export const headerDrawerClass: SxProps<Theme> = (theme) => ({
  padding: 2,
});

export const headerDrawerWrapperClass: SxProps<Theme> = (theme) => ({
  p: 4,
  borderTop: `1px solid ${theme.palette.grey[dividerGray]}`,
});

export const heroWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  height: { xs: "100vh", md: "50vh" },
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

export const highlightsContainerColumnClass: SxProps<Theme> = (theme) => ({
  width: "100%",
});

export const highlightsContainerRowClass: SxProps<Theme> = (theme) => ({
  ...containerClass(theme),
});

export const highlightsWrapperColumnClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: "flex",
  gap: 2,
  flexDirection: "column",
});

export const highlightsWrapperRowClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: "flex",
  gap: 2,
  flexDirection: { xs: "column", md: "row" },
});

export const highlightsHeadlineClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  mb: 2,
});

export const tagsWrapperContainerClass: SxProps<Theme> = (theme) => ({
  ...containerClass(theme),
});

export const tagsWrapperRegularClass: SxProps<Theme> = (theme) => ({
  width: "100%",
});

export const footerTextRowClass: SxProps<Theme> = (theme) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  p: 2,
  pb: 4,
  backgroundColor: "transparent",
});

export const imageWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  pt: "60.25%",
  overflow: "hidden",
});

export const socialIconClass: SxProps<Theme> = (theme) => ({
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.warning.main}`,
  borderRadius: 1,
  p: 1,
  pb: 0,
});
