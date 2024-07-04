"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { heroWrapperClass } from "@/styles/layouts";
import useSWR from "swr";
import { HeroPostParamsType } from "@/types";
import { convertPropsToApiRoute, ExtractPostData } from "@/controllers/utils";
import { postsFetcher } from "@/controllers/api";
import parse from "html-react-parser";
import { textPillClass } from "@/styles/text";
import Categories from "./Categories";

export default function Hero({ page, categories, tags, search, postId }: HeroPostParamsType) {
  const apiRoute = convertPropsToApiRoute({ page, categories, tags, search });

  const heroApiRoute = apiRoute;
  const heroFetcher = postsFetcher;

  const { data, error, isLoading } = useSWR(heroApiRoute, heroFetcher);

  console.log("Hero: ", data, error, isLoading);

  if (isLoading || !data) return <Box>Loading...</Box>;

  if (error) return <Box>Error: {error.message}</Box>;

  const { imageData, excerptLimited } = ExtractPostData(data.posts[0]);

  return (
    <Box sx={heroWrapperClass} style={{ backgroundImage: `url(${imageData.source_url})` }}>
      <Container sx={{ pb: "50px", zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack spacing={4}>
              <Typography variant="h4">{parse(data.posts[0].title.rendered)}</Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  <Categories categoryId={data.posts[0].categories[0]} preloaderSize={10} />
                </Typography>
                <Typography variant="body2">{data.posts[0].date.substring(0, 10)}</Typography>
              </Stack>
              <Typography variant="body1">{excerptLimited}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
