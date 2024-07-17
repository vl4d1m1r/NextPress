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

export const rightGridWrapperClass: SxProps<Theme> = (theme) => ({
  pl: { xs: 0, md: 4 },
  pt: { xs: 4, md: 0 },
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
    background:
      theme.palette.mode === "dark"
        ? "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)"
        : "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
  },
});

export const sectionDividerClass: SxProps<Theme> = (theme) => ({
  width: "100%",
  pt: 4,
  mb: 4,
  borderBottom: `1px solid ${theme.palette.grey[dividerGray]}`,
});

export const imageCaptionClass: SxProps = {
  display: "block",
  position: "absolute",
  backgroundColor: "rgba(0,0,0,0.5)",
  px: 1,
};

export const postsImageWrapperClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  mr: { xs: 0, sm: 4 },
});

export const postsImageCaptionClass: SxProps<Theme> = (theme) => ({
  ...imageCaptionClass,
  top: 0,
  left: 0,
  width: "100%",
  color: "white",
});

export const postImageCaptionClass: SxProps<Theme> = (theme) => ({
  ...imageCaptionClass,
  top: "1rem",
  right: "1rem",
  color: "white",
});

export const highlightsImageCaptionClass: SxProps<Theme> = (theme) => ({
  ...imageCaptionClass,
  top: 0,
  left: 0,
  width: "100%",
  color: "white",
});

export const postsInfoWrapperClass: SxProps<Theme> = (theme) => ({
  border: `1px solid ${theme.palette.grey[dividerGray]}`,
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
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
  gap: 4,
  flexDirection: "column",
});

export const highlightsWrapperRowClass: SxProps<Theme> = (theme) => ({
  position: "relative",
  display: "flex",
  gap: 4,
  flexDirection: { xs: "column", md: "row" },
});

export const highlightsHeadlineClass: SxProps<Theme> = (theme) => ({
  display: "flex",
  alignItems: "center",
  mb: 2,
});

export const highlightsErrorSkeletonWrapperClass: SxProps<Theme> = (theme) => ({
  border: `1px solid ${theme.palette.grey[dividerGray]}`,
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
});

export const tagsWrapperContainerClass: SxProps<Theme> = (theme) => ({
  ...containerClass(theme),
});

export const tagsInfoWrapperClass: SxProps<Theme> = (theme) => ({
  border: `1px solid ${theme.palette.grey[dividerGray]}`,
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "200px",
});

export const tagsWrapperRegularClass: SxProps<Theme> = (theme) => ({
  width: "100%",
});

export const tagsInfoWrapperContainerClass: SxProps<Theme> = (theme) => ({
  ...containerClass(theme),
  ...tagsInfoWrapperClass(theme),
  border: "none",
});

export const tagsInfoWrapperRegularClass: SxProps<Theme> = (theme) => ({
  ...tagsInfoWrapperClass(theme),
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

export const backdropInfoWrapperClass: SxProps<Theme> = (theme) => ({
  background: "rgba(0,0,0,0.9)",
  color: "#fff",
  zIndex: theme.zIndex.drawer + 1,
  p: { xs: 2, sm: 4, lg: 0 },
});
