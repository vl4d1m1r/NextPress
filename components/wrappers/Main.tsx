import { Container, Grid, Stack } from "@mui/material";
import Posts from "@/components/sections/Posts";
import Search from "@/components/widgets/Search";
import TweetPost from "@/components/widgets/TweetPost";
import Tags from "@/components/sections/Tags";
import { PostParamsType } from "@/types";

export default function Main({ page, category, tag, search }: PostParamsType) {
  return (
    <Container component="main">
      <Grid container>
        <Grid item xs={12} md={8}>
          <Posts page={page} category={category} tag={tag} search={search} />
        </Grid>
        <Grid item xs={12} md={4} sx={{ pl: { xs: 0, md: 4 } }}>
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
