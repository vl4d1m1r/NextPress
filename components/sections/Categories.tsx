"use client";
import { apiConfig, mainMenuConfig } from "@/models/config";
import { buttonCategoriesClass } from "@/styles/buttons";
import { CategoryType, DirectionsType } from "@/types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

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
  const pathname = usePathname();
  const [categoryNumber, setCategoryNumber] = useState<number | null>(null);
  const { data, error, isLoading } = useSWR(apiConfig.categoriesSwrKey, fetcher);

  useEffect(() => {
    if (pathname) {
      const match = pathname.match(/category\/(\d+)$/);
      if (match) {
        const categoryNum = parseInt(match[1], 10);
        setCategoryNumber(categoryNum);
      } else {
        setCategoryNumber(null);
      }
    }
  }, [pathname]);

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
        let buttonVariant = "text";
        if (mainMenuConfig.buttonsOutlined) buttonVariant = "outlined";
        if (categoryNumber === category.id) buttonVariant = "contained";
        if (category.count) {
          return (
            <Button
              variant={buttonVariant as "text" | "outlined" | "contained"}
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
