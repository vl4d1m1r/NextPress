"use client";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Box from "@mui/material/Box";
import { searchWrapperClass } from "@/styles/layouts";
import { API } from "@/models/constants";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    console.log("Search: ", process.env.DOMAIN + API.searchPath + inputElement.value);
    router.push(process.env.DOMAIN + API.searchPath + inputElement.value);
  };

  return (
    <Box component="form" sx={searchWrapperClass}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleSearch}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Box>
  );
}
