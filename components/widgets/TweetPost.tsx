"use client";
import { useTheme } from "@/context/ThemeContext";
import Box from "@mui/material/Box";
import { Tweet } from "react-tweet";

export default function TweetPost({ id }: { id: string }) {
  const { theme } = useTheme();
  return (
    <Box className={theme === "light" ? "light" : "dark"}>
      <Tweet id={id} />
    </Box>
  );
}
