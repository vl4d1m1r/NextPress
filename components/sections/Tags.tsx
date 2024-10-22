"use client";
import { simpleFetcher } from "@/controllers/api";
import { deepClone } from "@/controllers/utils";
import { apiConfig, pageConfig } from "@/models/config";
import {
  tagsChipsClass,
  tagsInfoWrapperContainerClass,
  tagsInfoWrapperRegularClass,
  tagsWrapperClass,
  tagsWrapperContainerClass,
  tagsWrapperRegularClass,
} from "@/styles/layouts";
import { TagsDisplayVariantType, TagType } from "@/types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export default function Tags({
  tagIds,
  tagsDisplayVariant,
  containerized = false,
}: {
  tagIds?: number[];
  tagsDisplayVariant?: TagsDisplayVariantType;
  containerized?: boolean;
}) {
  const router = useRouter();

  const { data, error, isLoading } = useSWR(apiConfig.wordpressApiPath + apiConfig.tagsSwrKey, simpleFetcher);

  if (error)
    return (
      <Box sx={containerized ? tagsInfoWrapperContainerClass : tagsInfoWrapperRegularClass}>
        <SentimentVeryDissatisfiedIcon fontSize="large" />
      </Box>
    );

  if (isLoading && !data)
    return (
      <Box sx={containerized ? tagsInfoWrapperContainerClass : tagsInfoWrapperRegularClass}>
        <CircularProgress />
      </Box>
    );

  let tags = deepClone(data);

  if (tagIds?.length) {
    tags = tags.filter((tag: { id: number }) => {
      return tagIds.includes(tag.id);
    });
  }

  if (tagsDisplayVariant === "MOST_POPULAR") {
    tags = [...tags].sort((a, b) => b.count - a.count).slice(0, pageConfig.numberOfPopularTagsToShow);
  }

  const handleTagClick = (tagId: number) => {
    router.push(process.env.DOMAIN + apiConfig.tagsPath + tagId);
  };

  return (
    <Box className="tags" sx={containerized ? tagsWrapperContainerClass : tagsWrapperRegularClass}>
      {tagsDisplayVariant === "MOST_POPULAR" ? (
        <Typography variant="h5" sx={{ mb: 2 }}>
          Top {pageConfig.numberOfPopularTagsToShow} tags:
        </Typography>
      ) : null}
      <Box sx={tagsWrapperClass}>
        {tags.map((tag: TagType) => {
          return (
            <Button key={tag.id} sx={tagsChipsClass} onClick={() => handleTagClick(tag.id)}>
              {tag.name}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}
