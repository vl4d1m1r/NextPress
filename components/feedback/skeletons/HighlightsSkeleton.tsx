"use client";
import {
  highlightsContainerColumnClass,
  highlightsContainerRowClass,
  highlightsErrorSkeletonWrapperClass,
  highlightsWrapperColumnClass,
  highlightsWrapperRowClass,
} from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { Skeleton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { highlightsHeadlineClass } from "@/styles/layouts";
import { DirectionsType } from "@/types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function HighlightsSkeleton({
  numberOfItems = 3,
  direction = "ROW",
  error = false,
}: {
  numberOfItems?: number;
  direction?: DirectionsType;
  error?: boolean;
}) {
  const skeletons = Array.from({ length: numberOfItems }, (_, index) => index);

  if (error) {
    return (
      <Box
        component="section"
        className="highlights-error"
        sx={direction === "COLUMN" ? highlightsContainerColumnClass : highlightsContainerRowClass}
      >
        <Box sx={direction === "COLUMN" ? highlightsWrapperColumnClass : highlightsWrapperRowClass}>
          {skeletons.map((skeleton) => (
            <Stack key={skeleton} width={direction === "ROW" ? "33%" : "100%"} sx={highlightsErrorSkeletonWrapperClass}>
              <SentimentVeryDissatisfiedIcon fontSize="large" />
            </Stack>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      className="highlights-loading"
      sx={direction === "COLUMN" ? highlightsContainerColumnClass : highlightsContainerRowClass}
    >
      <Stack direction="row" spacing={2} sx={highlightsHeadlineClass}>
        <Skeleton variant="rectangular" width="50px" height="30px" />
        <Skeleton variant="rectangular" width="200px" height="30px" />
      </Stack>
      <Box sx={direction === "COLUMN" ? highlightsWrapperColumnClass : highlightsWrapperRowClass}>
        {skeletons.map((skeleton) => {
          return (
            <Stack key={skeleton} spacing={2} width={direction === "ROW" ? "33%" : "100%"}>
              <Box sx={{ width: "100%", overflow: "hidden" }}>
                <Skeleton variant="rectangular" width="100%" height="200px" />
              </Box>
              <Box>
                <Skeleton variant="rectangular" width="100%" height="30px" />
              </Box>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  <Skeleton variant="rectangular" width="50px" height="30px" />
                </Typography>
                <Skeleton variant="rectangular" width="100%" height="30px" />
              </Stack>
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
}
