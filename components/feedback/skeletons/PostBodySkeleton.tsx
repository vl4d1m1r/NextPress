import Box from "@mui/material/Box";
import { Skeleton, Stack } from "@mui/material";
import { postsImageWrapperClass } from "@/styles/layouts";

export default function PostBody({ numberOfItems = 10 }: { numberOfItems?: number }) {
  const skeletons = Array.from({ length: numberOfItems }, (_, index) => index);

  return (
    <Stack component="article" spacing={4}>
      <Box sx={postsImageWrapperClass}>
        <Skeleton variant="rectangular" width="100%" height="400px" />
      </Box>
      <Stack spacing={4}>
        {skeletons.map((skeleton) => {
          return <Skeleton key={skeleton} variant="rectangular" width="100%" height="30px" />;
        })}
      </Stack>
    </Stack>
  );
}
