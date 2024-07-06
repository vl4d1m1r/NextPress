"use client";
import { postsFetcher } from "@/controllers/api";
import { ExtractPostData, convertPropsToApiRoute, convertPropsToLocalRoute, formatDate } from "@/controllers/utils";
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
import { useRouter } from "next/navigation";

export default function Posts({ page, category, tag, search }: PostParamsType) {
  const router = useRouter();
  const apiRoute = convertPropsToApiRoute({ page, category, tag, search });
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: any) => {
    console.log("Page change: ", value);
    router.push(convertPropsToLocalRoute({ page: value }));
  };

  console.log("Posts: ", data, error, isLoading);

  if (!data) {
    return <PostsSkeleton numberOfItems={4} />;
  }

  if (data && data.posts.length === 1) {
    return (
      <Stack component="section" direction="column">
        <Box>{parse(data.posts[0].content.rendered)}</Box>
      </Stack>
    );
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
                      <Typography variant="h4">{parse(post.title.rendered)}</Typography>
                    </Link>
                    <Stack direction="row" spacing={2}>
                      <Typography variant="body2" sx={textPillClass}>
                        <Categories categoryId={post.categories[0]} preloaderSize={10} />
                      </Typography>
                      <Typography variant="body2">{formatDate(post.date.substring(0, 10))}</Typography>
                    </Stack>
                    <Typography variant="body2">{excerptLimited}</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Stack>
      {Number(data.totalPages) > 1 ? (
        <Pagination
          count={Number(data.totalPages)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      ) : null}
    </>
  );
}
