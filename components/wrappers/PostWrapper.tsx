"use client";
import ScrollToTopButton from "@/components/elements/ScrollToTopButton";
import SectionDivider from "@/components/elements/SectionDivider";
import PostBodySkeleton from "@/components/feedback/skeletons/PostBodySkeleton";
import PostHeaderSkeleton from "@/components/feedback/skeletons/PostHeaderSkeleton";
import AboutUs from "@/components/sections/AboutUs";
import Highlights from "@/components/sections/Highlights";
import PostBody from "@/components/sections/PostBody";
import PostHeader from "@/components/sections/PostHeader";
import Tags from "@/components/sections/Tags";
import BackdropInfo from "@/components/widgets/BackdropInfo";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import { simpleFetcher } from "@/controllers/api";
import { getTwitterRandomPostId } from "@/controllers/utils";
import { apiConfig, categoriesConfig, pageConfig, sidebarConfig, twitterPostIdsConfig } from "@/models/config";
import { rightGridWrapperClass } from "@/styles/layouts";
import { PostType } from "@/types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function PostWrapper({ postId }: { postId: string }) {
  const [sidebarLevel, setSidebarLevel] = useState(0);

  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  useEffect(() => {
    if (!data) return;
    let sidebarLevel = Math.floor(Number(data[0].content.rendered.length) / pageConfig.sidebarCharactersPerLevel);
    if (sidebarLevel < 0) sidebarLevel = 0;
    if (sidebarLevel > 4) sidebarLevel = 4;
    setSidebarLevel(sidebarLevel);
  }, [data]);

  if (error) return <BackdropInfo message={error.message} />;

  return (
    <Box>
      <Container sx={{ pt: 16 }}>
        <Grid container>
          <Grid item xs={12} md={8}>
            {isLoading || !data ? <PostHeaderSkeleton /> : <PostHeader post={data[0]} />}
          </Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={8}>
            {isLoading || !data ? <PostBodySkeleton /> : <PostBody post={data[0]} />}
          </Grid>
          <Grid item xs={12} md={4} sx={rightGridWrapperClass}>
            <Stack spacing={2}>
              <Search />
              {sidebarConfig.postPage.showAboutUs ? <AboutUs /> : null}
              {sidebarConfig.postPage.showTweets ? (
                <TweetPost id={getTwitterRandomPostId(twitterPostIdsConfig)} />
              ) : null}
              {sidebarLevel === 0 && sidebarConfig.postPage.showTags ? (
                <Tags tagsDisplayVariant="MOST_POPULAR" />
              ) : null}
              {sidebarLevel > 0 && sidebarConfig.postPage.showTags ? <Tags /> : null}
              {sidebarLevel > 1 && sidebarConfig.postPage.showHighlightsLevel1 ? (
                <Highlights direction="COLUMN" category={categoriesConfig.gaming} />
              ) : null}
              {sidebarLevel > 2 && sidebarConfig.postPage.showHighlightsLevel2 ? (
                <Highlights direction="COLUMN" category={categoriesConfig.coding} />
              ) : null}
              {sidebarLevel > 3 && sidebarConfig.postPage.showHighlightsLevel3 ? (
                <Highlights direction="COLUMN" category={categoriesConfig.design} />
              ) : null}
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <SectionDivider />
      <ScrollToTopButton />
    </Box>
  );
}
