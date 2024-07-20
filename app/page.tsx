import SectionDivider from "@/components/elements/SectionDivider";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Tags from "@/components/sections/Tags";
import Main from "@/components/wrappers/Main";
import { categoriesConfig } from "@/models/config";

export default function HomeRoute() {
  return (
    <>
      <Hero page={1} />
      <SectionDivider />
      <Main page={1} />
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
