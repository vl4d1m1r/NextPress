import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";

export default function PostsPageCategoryRoute({ params }: { params: { page: string; category: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} category={Number(params.category)} />
      <SectionDivider />
      <Main page={Number(params.page)} category={Number(params.category)} />
      <SectionDivider />
      <Highlights category={2} />
      <SectionDivider />
      <Highlights category={4} />
      <SectionDivider />
    </>
  );
}
