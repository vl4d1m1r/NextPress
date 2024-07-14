import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";
import Footer from "@/components/sections/Footer";
import { categoriesConfig } from "@/models/config";

export default function PostsPageRoute({ params }: { params: { page: string } }) {
  return (
    <>
      <Hero page={Number(params.page)} />
      <SectionDivider />
      <Main page={Number(params.page)} />
      <SectionDivider />
      <Highlights category={categoriesConfig.coding} />
      <SectionDivider />
      <Highlights category={categoriesConfig.gaming} />
      <SectionDivider />
    </>
  );
}
