import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";

export default function PostsPageSearchRoute({ params }: { params: { page: string; search: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} search={params.search} />
      <SectionDivider />
      <Main page={Number(params.page)} search={params.search} />
      <SectionDivider />
      <Highlights category={4} />
      <SectionDivider />
      <Highlights category={2} />
      <SectionDivider />
    </>
  );
}
