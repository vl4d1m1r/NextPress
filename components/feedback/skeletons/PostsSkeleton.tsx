import { postsInfoWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Grid, Skeleton, Stack, Typography } from "@mui/material";

export default function PostSkeleton({ numberOfItems = 4, error = false }: { numberOfItems: number; error?: boolean }) {
  const skeletons = Array.from({ length: numberOfItems }, (_, index) => index);

  if (error) {
    return (
      <Stack spacing={4}>
        {skeletons.map((skeleton) => (
          <Box key={skeleton} sx={postsInfoWrapperClass}>
            <SentimentVeryDissatisfiedIcon fontSize="large" />
          </Box>
        ))}
      </Stack>
    );
  }

  return (
    <>
      {skeletons.map((skeleton) => (
        <Box key={skeleton} className="blog-post-preview" sx={{ mb: 4 }}>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <Box sx={{ width: "100%", height: "100%", pr: 4 }}>
                <Skeleton variant="rectangular" width="100%" height="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7} sx={{ pr: { xs: 0, sm: 4 } }}>
              <Stack direction="column" spacing={2}>
                <Skeleton variant="rectangular" width="100%" height="30px" />
                <Stack direction="row" spacing={2}>
                  <Typography variant="body2" sx={textPillClass}>
                    <Skeleton variant="rectangular" width="50px" height="30px" />
                  </Typography>
                  <Skeleton variant="rectangular" width="100%" height="30px" />
                </Stack>
                <Skeleton variant="rectangular" width="100%" height="20px" />
                <Skeleton variant="rectangular" width="100%" height="20px" />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
}
