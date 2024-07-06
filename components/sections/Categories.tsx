"use client";
import useSWR from "swr";
import Link from "next/link";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { CategoryType, DirectionsType } from "@/types";
import { API } from "@/models/constants";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

const fetcher = (path: string) => fetch(API.basePath + path).then((res) => res.json());

export default function Categories({
  categoryId = null,
  direction = "ROW",
  preloaderColor = "white",
  preloaderSize = 20,
}: {
  categoryId?: number | null;
  direction?: DirectionsType;
  preloaderColor?: string;
  preloaderSize?: number;
}) {
  const { data, error, isLoading } = useSWR(API.categoriesSwrKey, fetcher);

  if (error) return <SentimentVeryDissatisfiedIcon />;

  if (isLoading) return <CircularProgress size={preloaderSize} sx={{ color: preloaderColor }} />;

  if (categoryId) {
    return (
      <>
        {data
          .filter((category: CategoryType) => category.id === categoryId)
          .map((category: CategoryType) => {
            return (
              <Link key={category.id} href={process.env.DOMAIN + API.categoriesPath + category.id} className="link">
                {category.name}
              </Link>
            );
          })}
      </>
    );
  }

  return (
    <Stack direction={direction === "ROW" ? "row" : "column"} spacing={2}>
      {data.map((category: CategoryType) => {
        if (category.count) {
          return (
            <Link key={category.id} className="link" href={process.env.DOMAIN + API.categoriesPath + category.id}>
              {category.name}
            </Link>
          );
        }
      })}
    </Stack>
  );
}
