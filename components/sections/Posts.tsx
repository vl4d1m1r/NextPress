"use client";
import { postsFetcher } from "@/controllers/api";
import { ExtractPostData, convertPropsToApiRoute } from "@/controllers/utils";
import { postsImageWrapperClass } from "@/styles/layouts";
import { textPillClass } from "@/styles/text";
import { PostParamsType, PostType } from "@/types";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import useSWR from "swr";
import PostsSkeleton from "../feedback/skeletons/PostsSkeleton";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder";
import Link from "next/link";
import parse from "html-react-parser";
import Categories from "./Categories";

export default function Posts({ page, categories, tags, search }: PostParamsType) {
  const apiRoute = convertPropsToApiRoute({ page, categories, tags, search });
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  console.log("Posts: ", data, error, isLoading);

  if (!data) {
    return <PostsSkeleton numberOfItems={4} />;
  }

  return (
    <>
      <Stack component="section" direction="column">
        {data.posts.map((post: PostType, index: number) => {
          const { imageData, excerptLimited } = ExtractPostData(post);
          if (index === 0) return null;
          return (
            <Box key={post.id} className={`blog-post-preview-${post.id}`} sx={{ mb: 4 }}>
              <Grid container>
                <Grid item xs={12} sm={5}>
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
                </Grid>
                <Grid item xs={12} sm={7} sx={{ pr: { xs: 0, sm: 4 } }}>
                  <Stack direction="column" spacing={2}>
                    <Link href={`/post/${post.slug}`}>
                      <Typography variant="h5">{parse(post.title.rendered)}</Typography>
                    </Link>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="body2" sx={textPillClass}>
                        <Categories categoryId={post.categories[0]} preloaderSize={10} />
                      </Typography>
                      <Typography variant="body2">{post.date.substring(0, 10)}</Typography>
                    </Stack>
                    <Typography variant="body2">{excerptLimited}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </>
  );
}
