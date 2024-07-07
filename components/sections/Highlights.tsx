"use client";
import {
  highlightsContainerColumnClass,
  highlightsContainerRowClass,
  highlightsWrapperColumnClass,
  highlightsWrapperRowClass,
  imageWrapperClass,
} from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import { highlightsHeadlineClass } from "@/styles/layouts";
import { DirectionsType, PostType } from "@/types";
import { convertPropsToApiRoute, ExtractPostData, formatDate } from "@/controllers/utils";
import useSWR from "swr";
import { postsFetcher } from "@/controllers/api";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder";
import parse from "html-react-parser";
import Categories from "./Categories";

export default function Highlights({ direction = "ROW", category }: { direction?: DirectionsType; category: number }) {
  const apiRoute = convertPropsToApiRoute({ page: 1, category });
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  if (error) return <Box>There were errors!!</Box>;

  if (isLoading || !data) return <Box>Loading...</Box>;

  return (
    <Box
      component="section"
      className="highlights"
      sx={direction === "COLUMN" ? highlightsContainerColumnClass : highlightsContainerRowClass}
    >
      <Stack direction="row" spacing={2} sx={highlightsHeadlineClass}>
        <AlarmOnIcon sx={{ fontSize: "42px" }} />
        <Typography variant="h5">Highlights</Typography>
      </Stack>
      <Box sx={direction === "COLUMN" ? highlightsWrapperColumnClass : highlightsWrapperRowClass}>
        {data.posts.slice(0, 3).map((highlight: PostType) => {
          const { imageData, excerptLimited } = ExtractPostData(highlight);
          return (
            <Stack key={highlight.id} spacing={2}>
              <Box sx={{ width: "100%", overflow: "hidden" }}>
                <Image
                  placeholder={imagePlaceholder}
                  src={imageData.source_url}
                  alt={imageData.title.rendered}
                  sizes="100vw"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  width={500}
                  height={300}
                />
              </Box>
              <Box>
                <Typography variant="h5">{parse(highlight.title.rendered)}</Typography>
              </Box>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  <Categories categoryId={highlight.categories[0]} preloaderSize={10} />
                </Typography>
                <Typography variant="body2">{formatDate(highlight.date.substring(0, 10))}</Typography>
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
}
