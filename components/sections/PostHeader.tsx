"use client";
import PostHeaderSkeleton from "@/components/feedback/skeletons/PostHeaderSkeleton";
import Categories from "@/components/sections/Categories";
import SeoInjector from "@/components/seo/SeoInjector";
import { simpleFetcher } from "@/controllers/api";
import { extractPostData, formatDate } from "@/controllers/utils";
import { apiConfig, defaultSeoConfig, pageConfig } from "@/models/config";
import { textPillClass } from "@/styles/text";
import { PostType, SeoDataType } from "@/types";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";
import { useEffect, useState } from "react";
import useSWR from "swr";

export default function PostHeader({ postId, setSidebarLevel }: { postId: string; setSidebarLevel: Function }) {
  const [seoParams, setSeoParams] = useState<SeoDataType>(defaultSeoConfig);
  const apiRoute = apiConfig.wordpressApiPath + apiConfig.postPath + postId;
  const { data, error, isLoading } = useSWR<PostType[]>(apiRoute, simpleFetcher);

  useEffect(() => {
    if (!data) return;
    const { imageData } = extractPostData(data[0]);
    setSeoParams({
      title: parse(data[0].title.rendered) as string,
      description: data[0].excerpt.rendered,
      image: imageData.source_url,
      url: window.location.href,
    });
  }, [data]);

  useEffect(() => {
    if (!data) return;
    let sidebarLevel = Math.floor(Number(post.content.rendered.length) / pageConfig.sidebarCharactersPerLevel);
    if (sidebarLevel < 0) sidebarLevel = 0;
    if (sidebarLevel > 4) sidebarLevel = 4;
    setSidebarLevel(sidebarLevel);
  }, [data]);

  if (error) return <PostHeaderSkeleton error={true} />;

  if (isLoading || !data) return <PostHeaderSkeleton />;

  const post = data[0];

  return (
    <>
      <SeoInjector {...seoParams} />
      <Stack component="article" className="post-header" spacing={4} sx={{ mb: 6 }}>
        <Typography variant="h1">{parse(post.title.rendered)}</Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" sx={textPillClass}>
            <Categories categoryId={post.categories[0]} preloaderSize={10} />
          </Typography>
          <Typography variant="body2">{formatDate(post.date.substring(0, 10))}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
