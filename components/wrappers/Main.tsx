import AboutUs from "@/components/sections/AboutUs";
import Posts from "@/components/sections/Posts";
import Tags from "@/components/sections/Tags";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import { getTwitterRandomPostId } from "@/controllers/utils";
import { sidebarConfig, twitterPostIdsConfig } from "@/models/config";
import { mainContainerClass, rightGridWrapperClass } from "@/styles/layouts";
import { PostParamsType } from "@/types";
import { Container, Grid, Stack } from "@mui/material";
import ScrollToTopButton from "../elements/ScrollToTopButton";

export default function Main({ page, category, tag, search }: PostParamsType) {
  return (
    <Container component="main" className="main" sx={mainContainerClass}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Posts page={page} category={category} tag={tag} search={search} />
        </Grid>
        <Grid item xs={12} md={4} sx={rightGridWrapperClass}>
          <Stack spacing={2}>
            <Search />
            {sidebarConfig.homePage.showAboutUs ? <AboutUs /> : null}
            {sidebarConfig.homePage.showTweets ? <TweetPost id={getTwitterRandomPostId(twitterPostIdsConfig)} /> : null}
            {sidebarConfig.homePage.showTopTags ? <Tags tagsDisplayVariant="MOST_POPULAR" /> : null}
          </Stack>
        </Grid>
      </Grid>
      <ScrollToTopButton />
    </Container>
  );
}
