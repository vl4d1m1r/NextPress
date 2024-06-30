import { Container, Grid, Stack } from "@mui/material";
import Posts from "@/components/ui/Posts";
import Search from "../ui/Search";
import TweetPost from "@/components/ui/TweetPost";

export default function Main() {
  return (
    <Container component="main">
      <Grid container>
        <Grid item xs={12} sm={8}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={4} sx={{ pl: { xs: 0, sm: 4 } }}>
          <Stack spacing={2}>
            <Search />
            <TweetPost id="1628832338187636740" />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
