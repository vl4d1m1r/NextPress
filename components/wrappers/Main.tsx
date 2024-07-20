import Posts from "@/components/sections/Posts";
import Tags from "@/components/sections/Tags";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import { rightGridWrapperClass } from "@/styles/layouts";
import { PostParamsType } from "@/types";
import { Container, Grid, Stack } from "@mui/material";

export default function Main({ page, category, tag, search }: PostParamsType) {
  return (
    <Container component="main" className="main">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Posts page={page} category={category} tag={tag} search={search} />
        </Grid>
        <Grid item xs={12} md={4} sx={rightGridWrapperClass}>
          <Stack spacing={2}>
            <Search />
            <TweetPost id="1628832338187636740" />
            <Tags tagsDisplayVariant="MOST_POPULAR" />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
