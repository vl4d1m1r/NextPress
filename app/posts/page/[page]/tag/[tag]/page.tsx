import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";

export default function PostsPageTagRoute({ params }: { params: { page: string; tag: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} tag={Number(params.tag)} />
      <SectionDivider />
      <Main page={Number(params.page)} tag={Number(params.tag)} />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
    </>
  );
}
