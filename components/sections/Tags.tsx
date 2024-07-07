"use client";
import { simpleFetcher } from "@/controllers/api";
import { API } from "@/models/constants";
import { tagsChipsClass, tagsWrapperClass, tagsWrapperRegularClass } from "@/styles/layouts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import useSWR from "swr";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { deepClone } from "@/controllers/utils";
import { TagsDisplayVariantType, TagType } from "@/types";
import { numberOfPopularTagsToShow } from "@/models/settings";
import Typography from "@mui/material/Typography";
import { tagsWrapperContainerClass } from "@/styles/layouts";
import { useRouter } from "next/navigation";

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

  const { data, error, isLoading } = useSWR(process.env.WORDPRESS_API_PATH + API.tagsSwrKey, simpleFetcher);

  if (error) return <SentimentVeryDissatisfiedIcon />;

  if (isLoading && !data) return <CircularProgress />;

  console.log("Tags: ", data);

  let tags = deepClone(data);

  if (tagIds?.length) {
    tags = tags.filter((tag: { id: number }) => {
      return tagIds.includes(tag.id);
    });
  }

  if (tagsDisplayVariant === "MOST_POPULAR") {
    tags = [...tags].sort((a, b) => b.count - a.count).slice(0, numberOfPopularTagsToShow);
  }

  const handleTagClick = (tagId: number) => {
    router.push(process.env.DOMAIN + API.tagsPath + tagId);
  };

  return (
    <Box className="tags" sx={containerized ? tagsWrapperContainerClass : tagsWrapperRegularClass}>
      {tagsDisplayVariant === "MOST_POPULAR" ? (
        <Typography variant="h5" sx={{ mb: 2 }}>
          Top {numberOfPopularTagsToShow} tags:
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
