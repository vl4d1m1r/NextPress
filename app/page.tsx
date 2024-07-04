import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";
import Footer from "@/components/sections/Footer";

export default function HomeRoute() {
  return (
    <>
      <Hero page={1} />
      <SectionDivider />
      <Main page={1} />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
      <Footer />
    </>
  );
}
