"use client";
import { buttonScrollToTopClass } from "@/styles/buttons";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <Fab color="primary" onClick={scrollToTop} sx={buttonScrollToTopClass}>
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </>
  );
};

export default ScrollToTopButton;
