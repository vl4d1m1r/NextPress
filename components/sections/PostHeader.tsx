import Categories from "@/components/sections/Categories";
import { formatDate } from "@/controllers/utils";
import { postHeaderWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { PostType } from "@/types";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";

export default function PostHeader({ post }: { post: PostType }) {
  return (
    <Stack component="article" id="post-header" spacing={4} sx={postHeaderWrapperClass}>
      <Typography variant="h1">{parse(post.title.rendered)}</Typography>
      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={textPillClass}>
          <Categories categoryId={post.categories[0]} preloaderSize={10} />
        </Typography>
        <Typography variant="body2">{formatDate(post.date.substring(0, 10))}</Typography>
      </Stack>
    </Stack>
  );
}
