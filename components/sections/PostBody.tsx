import { simpleFetcher } from "@/controllers/api";
import { API } from "@/models/constants";
import { PostType } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useSWR from "swr";
import parse from "html-react-parser";
import { Stack } from "@mui/material";
import { textPillClass } from "@/styles/text";
import { ExtractPostData, formatDate } from "@/controllers/utils";
import Categories from "./Categories";
import { postsImageWrapperClass } from "@/styles/layouts";
import Image from "next/image";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder";

export default function PostBody({ postId }: { postId: string }) {
  const apiRoute = API.basePath + API.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  if (error) return <div>Error: {error.message}</div>;

  if (isLoading || !data) return <div>Loading...</div>;

  const post = data[0];
  const { imageData, excerptLimited } = ExtractPostData(post);

  return (
    <Stack component="article" spacing={4}>
      <Box sx={postsImageWrapperClass}>
        <Image
          placeholder={imagePlaceholder}
          src={imageData.source_url}
          alt={imageData.title.rendered}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={500}
          height={300}
        />
      </Box>
      <Box>{parse(post.content.rendered)}</Box>
    </Stack>
  );
}
