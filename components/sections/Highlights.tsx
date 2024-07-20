"use client";
import {
  highlightsContainerColumnClass,
  highlightsContainerRowClass,
  highlightsImageCaptionClass,
  highlightsWrapperBoxClass,
  highlightsWrapperColumnClass,
  highlightsWrapperRowClass,
} from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { highlightsHeadlineClass } from "@/styles/layouts";
import { CategoryConfigType, DirectionsType, PostType } from "@/types";
import { convertPropsToApiRoute, extractPostData, formatDate } from "@/controllers/utils";
import useSWR from "swr";
import { postsFetcher } from "@/controllers/api";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder500x280";
import parse from "html-react-parser";
import Categories from "./Categories";
import HighlightsSkeleton from "../feedback/skeletons/HighlightsSkeleton";
import { imageConfig, postsConfig } from "@/models/config";
import Link from "next/link";

export default function Highlights({
  direction = "ROW",
  category,
}: {
  direction?: DirectionsType;
  category: CategoryConfigType;
}) {
  const apiRoute = convertPropsToApiRoute({ page: 1, category: category.id });
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  if (error) return <HighlightsSkeleton numberOfItems={3} direction={direction} error={true} />;

  if (isLoading || !data) return <HighlightsSkeleton numberOfItems={3} direction={direction} />;

  return (
    <Box
      component="section"
      className="highlights"
      sx={direction === "COLUMN" ? highlightsContainerColumnClass : highlightsContainerRowClass}
    >
      <Stack direction="row" spacing={2} sx={highlightsHeadlineClass}>
        <category.Icon sx={{ fontSize: "42px" }} />
        <Typography variant="h5">Highlights in {category.name}</Typography>
      </Stack>
      <Box sx={direction === "COLUMN" ? highlightsWrapperColumnClass : highlightsWrapperRowClass}>
        {data.posts.slice(0, 3).map((highlight: PostType) => {
          const { imageData, excerptLimited } = extractPostData(highlight);
          return (
            <Stack key={highlight.id} spacing={2}>
              <Box sx={highlightsWrapperBoxClass}>
                {postsConfig.showImageCaption.posts ? (
                  <Box sx={highlightsImageCaptionClass}>
                    <Typography variant="caption">{imageData.title.rendered}</Typography>
                  </Box>
                ) : null}
                <Link href={`/post/${highlight.slug}`}>
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
                    width={imageConfig.ratio.width}
                    height={imageConfig.ratio.height}
                  />
                </Link>
              </Box>
              <Box>
                <Link href={`/post/${highlight.slug}`}>
                  <Typography variant="h5">{parse(highlight.title.rendered)}</Typography>
                </Link>
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
