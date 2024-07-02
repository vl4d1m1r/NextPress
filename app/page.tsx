import Hero from "@/components/sections/Hero";
import SectionDivider from "@/components/elements/SectionDivider";
import Main from "@/components/wrappers/Main";
import Highlights from "@/components/sections/Highlights";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
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
