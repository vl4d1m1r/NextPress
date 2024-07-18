"use client";
/*
Hero can be called:
   - <Hero page={N} /> - displays the data from the first post on the Nth page
   - <Hero postId={postId} /> - displays the data from the post with the given ID
*/
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { heroWrapperClass } from "@/styles/layouts";
import useSWR from "swr";
import { HeroPostParamsType, PostsDataType, PostType } from "@/types";
import { convertPropsToApiRoute, extractPostData, formatDate } from "@/controllers/utils";
import { postsFetcher, simpleFetcher } from "@/controllers/api";
import parse from "html-react-parser";
import { textPillClass, textPostsContentClass } from "@/styles/text";
import Categories from "./Categories";
import { apiConfig } from "@/models/config";
import BackdropInfo from "@/components/widgets/BackdropInfo";
import HeroSkeleton from "../feedback/skeletons/HeroSkeleton";
import Link from "next/link";
import { infoDisplayDataConfig } from "@/models/config";

export default function Hero({ page, category, tag, search, postId }: HeroPostParamsType) {
  const apiRoute = convertPropsToApiRoute({ page, category, tag, search });

  let heroApiRoute = apiRoute;
  let heroFetcher = postsFetcher;
  if (postId) {
    heroApiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
    heroFetcher = simpleFetcher;
  }

  const { data, error, isLoading } = useSWR<PostsDataType | PostType[]>(heroApiRoute, heroFetcher);

  if (isLoading || !data) return <HeroSkeleton />;

  if (error) return <BackdropInfo message={error.message} />;

  console.log("Hero data: ", data);

  const heroPost = postId ? (data as PostType[])[0] : (data as PostsDataType).posts[0];
  const fetchedPostsCount = postId ? 1 : (data as PostsDataType).posts.length;
  const totalPosts = postId ? 1 : (data as PostsDataType).totalPosts;

  const { imageData, excerptLimited } = extractPostData(heroPost, 250);

  const noPostsFound = (data as PostsDataType).posts.length === 0;
  let heroLink = infoDisplayDataConfig.empty.homeLink;
  let heroTitle = infoDisplayDataConfig.empty.title;
  let heroImage = infoDisplayDataConfig.empty.image;
  let heroExcerpt = "";

  if ((data as PostsDataType).posts.length > 0) {
    heroLink = `/post/${heroPost.slug}`;
    heroTitle = parse(heroPost.title.rendered).toString();
    heroImage = imageData.source_url;
    heroExcerpt = excerptLimited;
  }

  return (
    <Box sx={heroWrapperClass} style={{ backgroundImage: `url(${heroImage})` }}>
      <Container sx={{ pb: "50px", zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack spacing={4}>
              <Link href={heroLink}>
                <Typography variant="h1">{heroTitle}</Typography>
              </Link>
              {noPostsFound ? null : (
                <Stack direction="row" spacing={2}>
                  <Typography variant="body2" sx={textPillClass}>
                    <Categories categoryId={heroPost.categories[0]} preloaderSize={10} />
                  </Typography>
                  <Typography variant="body2">{formatDate(heroPost.date.substring(0, 10))}</Typography>
                </Stack>
              )}
              {Number(totalPosts) === 1 || fetchedPostsCount === 1 || noPostsFound ? null : (
                <Link href={heroLink}>
                  <Typography variant="body1" sx={textPostsContentClass}>
                    {heroExcerpt}
                  </Typography>
                </Link>
              )}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
