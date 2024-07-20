"use client";
import SectionDivider from "@/components/elements/SectionDivider";
import Highlights from "@/components/sections/Highlights";
import PostBody from "@/components/sections/PostBody";
import PostHeader from "@/components/sections/PostHeader";
import Tags from "@/components/sections/Tags";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import { categoriesConfig } from "@/models/config";
import { rightGridWrapperClass } from "@/styles/layouts";
import { Container, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function PostRoute({ params }: { params: { postId: string } }) {
  const [sidebarLevel, setSidebarLevel] = useState(0);

  return (
    <Box>
      <Container sx={{ pt: 16 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <PostHeader postId={params.postId} setSidebarLevel={setSidebarLevel} />
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8}>
            <PostBody postId={params.postId} />
          </Grid>
          <Grid item xs={12} md={4} sx={rightGridWrapperClass}>
            <Stack spacing={2}>
              <Search />
              <TweetPost id="1628832338187636740" />
              {sidebarLevel === 0 ? <Tags tagsDisplayVariant="MOST_POPULAR" /> : null}
              {sidebarLevel > 0 ? <Tags /> : null}
              {sidebarLevel > 1 ? <Highlights direction="COLUMN" category={categoriesConfig.gaming} /> : null}
              {sidebarLevel > 2 ? <Highlights direction="COLUMN" category={categoriesConfig.coding} /> : null}
              {sidebarLevel > 3 ? <Highlights direction="COLUMN" category={categoriesConfig.design} /> : null}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SectionDivider />
    </Box>
  );
}
