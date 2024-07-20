import { postsInfoWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Box, Skeleton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function PostHeaderSkeleton({ error = false }: { error?: boolean }) {
  if (error) {
    return (
      <Box sx={postsInfoWrapperClass}>
        <SentimentVeryDissatisfiedIcon fontSize="large" />
      </Box>
    );
  }
  return (
    <Stack component="article" spacing={4} sx={{ mb: 6 }}>
      <Skeleton variant="rectangular" width="100%" height="30px" />
      <Skeleton variant="rectangular" width="100%" height="30px" />
      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={textPillClass}>
          <Skeleton variant="rectangular" width="100px" height="30px" />
        </Typography>
        <Skeleton variant="rectangular" width="100%" height="30px" />
      </Stack>
    </Stack>
  );
}
