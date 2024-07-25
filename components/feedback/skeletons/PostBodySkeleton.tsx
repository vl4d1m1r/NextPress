import { postConfig, socialShareConfig } from "@/models/config";
import { centerVerticalClass } from "@/styles/global";
import { postsImageWrapperClass } from "@/styles/layouts";
import { Skeleton, Stack } from "@mui/material";
import Box from "@mui/material/Box";

export default function PostBody({ numberOfItems = 10 }: { numberOfItems?: number }) {
  const skeletons = Array.from({ length: numberOfItems }, (_, index) => index);

  return (
    <Stack component="article" spacing={4}>
      {postConfig.postType === "plain-post" ? (
        <Box sx={postsImageWrapperClass}>
          <Skeleton variant="rectangular" width="100%" height="400px" />
        </Box>
      ) : null}
      {socialShareConfig.speedDialAlwaysOpen ? (
        <Stack direction="row" spacing={2} sx={centerVerticalClass}>
          <Skeleton variant="circular" width={60} height={60} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
      ) : (
        <Skeleton variant="circular" width={60} height={60} />
      )}
      <Stack spacing={4}>
        {skeletons.map((skeleton) => {
          return <Skeleton key={skeleton} variant="rectangular" width="100%" height="30px" />;
        })}
      </Stack>
    </Stack>
  );
}
