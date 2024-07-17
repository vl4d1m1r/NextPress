import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";
import { categoriesConfig } from "@/models/config";

export default function PostsPageTagRoute({ params }: { params: { page: string; tag: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} tag={Number(params.tag)} />
      <SectionDivider />
      <Main page={Number(params.page)} tag={Number(params.tag)} />
      <SectionDivider />
      <Highlights category={categoriesConfig.gaming} />
      <SectionDivider />
      <Highlights category={categoriesConfig.coding} />
      <SectionDivider />
    </>
  );
}