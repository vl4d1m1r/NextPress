import Hero from "@/components/ui/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import Main from "@/components/layouts/Main";
import Highlights from "@/components/ui/Highlights";
import Footer from "@/components/ui/Footer";

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
