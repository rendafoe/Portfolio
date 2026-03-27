import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Work from "@/components/Work";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Highlights />
      <Work />
      <Personal />
      <Contact />
    </main>
  );
}
