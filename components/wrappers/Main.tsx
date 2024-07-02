import { Container, Grid, Stack } from "@mui/material";
import Posts from "@/components/sections/Posts";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import Tags from "@/components/sections/Tags";
import { PostParamsType } from "@/types";

export default function Main({ page, categories, tags, search }: PostParamsType) {
  return (
    <Container component="main">
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Posts page={page} categories={categories} tags={tags} search={search} />
        </Grid>
        <Grid item xs={12} sm={4} sx={{ pl: { xs: 0, sm: 4 } }}>
          <Stack spacing={2}>
            <Search />
            <TweetPost id="1628832338187636740" />
            <Tags />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
