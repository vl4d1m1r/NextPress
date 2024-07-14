"use client";
import PostBody from "@/components/sections/PostBody";
import Tags from "@/components/sections/Tags";
import TweetPost from "@/components/widgets/TweetPost";
import Search from "@/components/widgets/Search";
import { Container, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import SectionDivider from "@/components/elements/SectionDivider";
import PostHeader from "@/components/sections/PostHeader";
import Highlights from "@/components/sections/Highlights";
import { categoriesConfig } from "@/models/config";

export default function PostRoute({ params }: { params: { postId: string } }) {
  console.log("Post ID: ", params.postId);
  return (
    <Box>
      <Container sx={{ pt: 16 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <PostHeader postId={params.postId} />
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8}>
            <PostBody postId={params.postId} />
          </Grid>
          <Grid item xs={12} md={4} sx={{ pl: { xs: 0, md: 4 } }}>
            <Stack spacing={2}>
              <Search />
              <TweetPost id="1628832338187636740" />
              <Tags />
              <Highlights direction="COLUMN" category={categoriesConfig.gaming} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SectionDivider />
    </Box>
  );
}
