import { simpleFetcher } from "@/controllers/api";
import { apiConfig, imageConfig } from "@/models/config";
import { PostType } from "@/types";
import Box from "@mui/material/Box";
import useSWR from "swr";
import parse from "html-react-parser";
import { Stack, Typography } from "@mui/material";
import { extractPostData } from "@/controllers/utils";
import { postImageCaptionClass, postsImageWrapperClass } from "@/styles/layouts";
import Image from "next/image";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder500x280";
import PostBodySkeleton from "../feedback/skeletons/PostBodySkeleton";
import BackdropInfo from "../widgets/BackdropInfo";
import { postsConfig } from "@/models/config";
import Author from "@/components/elements/Author";
import Share from "@/components/elements/Share";

export default function PostBody({ postId }: { postId: string }) {
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  if (error) return <BackdropInfo message={error.message} />;

  if (isLoading || !data) return <PostBodySkeleton />;

  const post = data[0];
  const { imageData, authorData } = extractPostData(post);

  return (
    <Stack component="article" className="post-body">
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
          width={imageConfig.ratio.width}
          height={imageConfig.ratio.height}
        />
      </Box>
      <Share headline={parse(post.title.rendered) as string} />
      <Box>{parse(post.content.rendered)}</Box>
      <Box sx={{ my: 2 }}>
        <Author authorData={authorData} />
      </Box>
    </Stack>
  );
}
