import { SxProps } from "@mui/material/styles";

export const headerWrapperClass: SxProps = {
  position: "absolute",
  width: "100%",
  backgroundColor: "transparent",
  zIndex: 1,
};

export const headerContainerClass: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  p: 2,
  borderBottom: "1px solid gray",
  backgroundColor: "transparent",
};

export const heroWrapperClass: SxProps = {
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
};
