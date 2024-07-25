import SectionDivider from "@/components/elements/SectionDivider";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";
import PostsWrapper from "@/components/wrappers/PostsWrapper";
import { categoriesConfig } from "@/models/config";

export default function PostsPageTagRoute({ params }: { params: { page: string; tag: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} tag={Number(params.tag)} />
      <SectionDivider />
      <PostsWrapper page={Number(params.page)} tag={Number(params.tag)} />
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
