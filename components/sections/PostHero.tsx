import { extractPostData, formatDate } from "@/controllers/utils";
import { heroPostTitleClass, heroTextWrapperClass, heroWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { PostType } from "@/types";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import Categories from "./Categories";

export default function PostHero({ post }: { post: PostType }) {
  const { imageData } = extractPostData(post, 250);

  return (
    <Box
      component="section"
      id="post-hero"
      sx={heroWrapperClass}
      style={{ backgroundImage: `url(${imageData.source_url})` }}
    >
      <Container sx={{ pb: "20px", zIndex: 1 }}>
        <Grid container>
          <Grid item xs={12} sm={8}>
            <Stack spacing={4} sx={heroTextWrapperClass}>
              <Typography variant="h1" sx={heroPostTitleClass}>
                {parse(post.title.rendered).toString()}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="body2" sx={textPillClass}>
                  <Categories categoryId={post.categories[0]} preloaderSize={10} />
                </Typography>
                <Typography variant="body2">{formatDate(post.date.substring(0, 10))}</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}></Grid>
        </Grid>
      </Container>
    </Box>
  );
}
