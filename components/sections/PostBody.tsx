import Author from "@/components/elements/Author";
import Share from "@/components/elements/Share";
import { extractPostData } from "@/controllers/utils";
import { imageConfig, postsConfig } from "@/models/config";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder500x280";
import { postImageCaptionClass, postsImageWrapperClass } from "@/styles/layouts";
import { PostType } from "@/types";
import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import parse from "html-react-parser";
import Image from "next/image";

export default function PostBody({ post }: { post: PostType }) {
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
          width={imageConfig.postImageRatio.width}
          height={imageConfig.postImageRatio.height}
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
