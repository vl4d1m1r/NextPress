import SectionDivider from "@/components/elements/SectionDivider";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";
import PostsWrapper from "@/components/wrappers/PostsWrapper";
import { categoriesConfig } from "@/models/config";

export default function PostsPageCategoryRoute({ params }: { params: { page: string; category: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} category={Number(params.category)} />
      <SectionDivider />
      <PostsWrapper page={Number(params.page)} category={Number(params.category)} />
      <SectionDivider />
      <Highlights category={categoriesConfig.gaming} />
      <SectionDivider />
      <Tags tagsDisplayVariant="ALL" containerized={true} />
      <SectionDivider />
      <Highlights category={categoriesConfig.coding} />
      <SectionDivider />
    </>
  );
}
