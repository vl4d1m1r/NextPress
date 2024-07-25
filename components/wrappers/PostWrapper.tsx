"use client";
/*
There are two types of posts, and you can choose one of them to be displayed as the main post on the post page:
   - hero-post: displays the post as a hero post with a large image and a title
   - plain-post: displays the post as a plain post with a smaller image and a title
*/
import ScrollToTopButton from "@/components/elements/ScrollToTopButton";
import SectionDivider from "@/components/elements/SectionDivider";
import HeroSkeleton from "@/components/feedback/skeletons/HeroSkeleton";
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
import { apiConfig, categoriesConfig, pageConfig, postConfig, sidebarConfig, widgetsConfig } from "@/models/config";
import { rightGridWrapperClass } from "@/styles/layouts";
import { PostType } from "@/types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import useSWR from "swr";
import PostHero from "../sections/PostHero";

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
    <Box component="main" id="main-post-wrapper">
      {postConfig.postType === "hero-post" ? (
        <>
          {data ? <PostHero post={data[0]} /> : <HeroSkeleton source="post" />}
          <SectionDivider />
        </>
      ) : null}
      <Container sx={{ pt: postConfig.postType === "plain-post" ? 16 : 0 }}>
        {postConfig.postType === "plain-post" ? (
          <Grid container>
            <Grid item xs={12} md={8}>
              {isLoading || !data ? <PostHeaderSkeleton /> : <PostHeader post={data[0]} />}
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        ) : null}
        <Grid container>
          <Grid item xs={12} md={8}>
            {isLoading || !data ? <PostBodySkeleton /> : <PostBody post={data[0]} />}
          </Grid>
          <Grid item xs={12} md={4} sx={rightGridWrapperClass}>
            <Stack spacing={2}>
              <Search />
              {sidebarConfig.postPage.showAboutUs ? <AboutUs /> : null}
              {sidebarConfig.postPage.showTweets ? (
                <TweetPost id={getTwitterRandomPostId(widgetsConfig.twitter.ids)} />
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
