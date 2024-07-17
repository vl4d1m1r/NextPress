"use client";
import useSWR from "swr";
import Link from "next/link";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { CategoryType, DirectionsType } from "@/types";
import { apiConfig } from "@/models/config";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import { buttonCategoriesClass } from "@/styles/buttons";
import { mainMenuConfig } from "@/models/config";

const fetcher = (path: string) => fetch(apiConfig.wordpressApiPath + path).then((res) => res.json());

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
  const { data, error, isLoading } = useSWR(apiConfig.categoriesSwrKey, fetcher);

  if (error) return <SentimentVeryDissatisfiedIcon />;

  if (isLoading) return <CircularProgress size={preloaderSize} sx={{ color: preloaderColor }} />;

  if (categoryId) {
    return (
      <>
        {data
          .filter((category: CategoryType) => category.id === categoryId)
          .map((category: CategoryType) => {
            return (
              <Link
                key={category.id}
                href={process.env.DOMAIN + apiConfig.categoriesPath + category.id}
                className="link"
              >
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
            <Button
              variant={mainMenuConfig.buttonsOutlined ? "outlined" : "text"}
              key={category.id}
              sx={direction === "ROW" && mainMenuConfig.buttonsBackground ? buttonCategoriesClass : null}
            >
              <Link className="link" href={process.env.DOMAIN + apiConfig.categoriesPath + category.id}>
                {category.name}
              </Link>
            </Button>
          );
        }
      })}
    </Stack>
  );
}
