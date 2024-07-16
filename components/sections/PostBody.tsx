import { simpleFetcher } from "@/controllers/api";
import { apiConfig } from "@/models/config";
import { PostType } from "@/types";
import Box from "@mui/material/Box";
import useSWR from "swr";
import parse from "html-react-parser";
import { Stack, Typography } from "@mui/material";
import { ExtractPostData } from "@/controllers/utils";
import { postImageCaptionClass, postsImageWrapperClass } from "@/styles/layouts";
import Image from "next/image";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder";
import PostBodySkeleton from "../feedback/skeletons/PostBodySkeleton";
import BackdropInfo from "../widgets/BackdropInfo";
import { postsConfig } from "@/models/config";

export default function PostBody({ postId }: { postId: string }) {
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  if (error) return <BackdropInfo message={error.message} />;

  if (isLoading || !data) return <PostBodySkeleton />;

  const post = data[0];
  const { imageData } = ExtractPostData(post);

  return (
    <Stack component="article" spacing={4}>
      <Box sx={postsImageWrapperClass}>
        {postsConfig.showImageCaption.post ? (
          <Box sx={postImageCaptionClass}>
            <Typography variant="caption">{imageData.title.rendered}</Typography>
          </Box>
        ) : null}
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
