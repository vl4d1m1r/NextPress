import { PostType } from "@/types";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Author({ authorData }: { authorData: PostType["_embedded"]["author"][0] | undefined }) {
  return (
    <Grid className="author" container>
      <Grid item xs={12} md={2}>
        {authorData?.avatar_urls[96] ? (
          <Image
            src={authorData.avatar_urls[96]}
            alt="Author photo"
            width={80}
            height={80}
            className="post-author-photo"
          />
        ) : null}
      </Grid>
      <Grid item xs={12} md={10}>
        <Stack spacing={1}>
          <Typography variant="h4">{authorData?.name}</Typography>
          <Typography variant="body1">{authorData?.description}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
