import SectionDivider from "@/components/elements/SectionDivider";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";
import Main from "@/components/wrappers/Main";
import { categoriesConfig } from "@/models/config";

export default function PostsPageSearchRoute({ params }: { params: { page: string; search: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} search={params.search} />
      <SectionDivider />
      <Main page={Number(params.page)} search={params.search} />
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
