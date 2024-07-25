import SectionDivider from "@/components/elements/SectionDivider";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";
import PostsWrapper from "@/components/wrappers/PostsWrapper";
import { categoriesConfig } from "@/models/config";

export default function PostsPageRoute({ params }: { params: { page: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} />
      <SectionDivider />
      <PostsWrapper page={Number(params.page)} />
      <SectionDivider />
      <Highlights category={categoriesConfig.coding} />
      <SectionDivider />
      <Tags tagsDisplayVariant="ALL" containerized={true} />
      <SectionDivider />
      <Highlights category={categoriesConfig.gaming} />
      <SectionDivider />
    </>
  );
}
