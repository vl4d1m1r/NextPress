import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import SectionDivider from "@/components/ui/SectionDivider";
import Main from "@/components/layouts/Main";
import Highlights from "@/components/ui/Highlights";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <Main />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
      <Highlights />
      <SectionDivider />
    </>
  );
}
