import { simpleFetcher } from "@/controllers/api";
import { apiConfig } from "@/models/config";
import { PostType } from "@/types";
import Typography from "@mui/material/Typography";
import useSWR from "swr";
import parse from "html-react-parser";
import { Stack } from "@mui/material";
import { textPillClass } from "@/styles/text";
import { ExtractPostData, formatDate } from "@/controllers/utils";
import Categories from "./Categories";

export default function PostHeader({ postId }: { postId: string }) {
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  const post = data[0];
  const { imageData, excerptLimited } = ExtractPostData(post);

  return (
    <Stack component="article" spacing={4} sx={{ mb: 6 }}>
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
