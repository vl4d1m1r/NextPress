import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";

export default function HomeRoute() {
  return (
    <>
      <Hero page={1} />
      <SectionDivider />
      <Main page={1} />
      <SectionDivider />
      <Highlights category={2} />
      <SectionDivider />
      <Tags tagsDisplayVariant="ALL" containerized={true} />
      <SectionDivider />
      <Highlights category={4} />
      <SectionDivider />
    </>
  );
}
