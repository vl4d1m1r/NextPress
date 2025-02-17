"use client";
import { postsFetcher } from "@/controllers/api";
import { convertPropsToApiRoute, convertPropsToLocalRoute, extractPostData, formatDate } from "@/controllers/utils";
import { imageConfig, infoDisplayDataConfig, postsConfig } from "@/models/config";
import { imagePlaceholder } from "@/public/images/placeholders/imagePlaceholder500x280";
import { postsImageCaptionClass, postsImageWrapperClass } from "@/styles/layouts";
import { textPillClass, textPostsContentClass, textPostsHeadlineClass } from "@/styles/text";
import { PostParamsType, PostType } from "@/types";
import { Grid, Pagination, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Author from "../elements/Author";
import PostsSkeleton from "../feedback/skeletons/PostsSkeleton";
import Categories from "./Categories";

export default function Posts({ page, category, tag, search }: PostParamsType) {
  const router = useRouter();
  const apiRoute = convertPropsToApiRoute({ page, category, tag, search });
  const { data, error, isLoading } = useSWR(apiRoute, postsFetcher);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: any) => {
    router.push(convertPropsToLocalRoute({ page: value, category, tag, search }));
  };

  if (error) {
    return <PostsSkeleton numberOfItems={4} error={true} />;
  }

  if (isLoading || !data) {
    return <PostsSkeleton numberOfItems={4} />;
  }

  if (data.posts.length === 0) {
    return (
      <>
        {infoDisplayDataConfig.empty.messages.map((message, index) => (
          <Typography key={index} variant="h4" sx={{ mb: 2 }}>
            {message}
          </Typography>
        ))}
      </>
    );
  }

  return (
    <>
      <Stack spacing={6} component="section" className="posts" direction="column">
        {data && data.posts.length > 1 ? (
          <>
            {data.posts.map((post: PostType, index: number) => {
              const { imageData, excerptLimited } = extractPostData(post);
              if (index === 0) return null;
              return (
                <Box key={post.id} className={`blog-post-preview-${post.id}`} sx={{ mb: 4 }}>
                  <Grid container>
                    <Grid item xs={12} sm={5}>
                      <Box sx={postsImageWrapperClass}>
                        {postsConfig.showImageCaption.posts ? (
                          <Box sx={postsImageCaptionClass}>
                            <Typography variant="caption">{imageData.title.rendered}</Typography>
                          </Box>
                        ) : null}
                        <Link href={`/post/${post.slug}`}>
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
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={7} sx={{ pr: { xs: 0, sm: 4 } }}>
                      <Stack direction="column" spacing={2}>
                        <Link href={`/post/${post.slug}`}>
                          <Typography variant="h4" sx={textPostsHeadlineClass}>
                            {parse(post.title.rendered)}
                          </Typography>
                        </Link>
                        <Stack direction="row" spacing={2}>
                          <Typography variant="body2" sx={textPillClass}>
                            <Categories categoryId={post.categories[0]} preloaderSize={10} />
                          </Typography>
                          <Typography variant="body2">{formatDate(post.date.substring(0, 10))}</Typography>
                        </Stack>
                        <Link href={`/post/${post.slug}`}>
                          <Typography variant="body2" sx={textPostsContentClass}>
                            {excerptLimited}
                          </Typography>
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </>
        ) : (
          <Stack component="section" spacing={2} direction="column" sx={{ mb: 2 }}>
            <Box>{parse(data.posts[0].content.rendered)}</Box>
            <Author authorData={data.posts[0]._embedded.author[0]} />
          </Stack>
        )}
      </Stack>
      {Number(data.totalPages) > 1 ? (
        <Pagination
          count={Number(data.totalPages)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{ mt: 4 }}
        />
      ) : null}
    </>
  );
}
