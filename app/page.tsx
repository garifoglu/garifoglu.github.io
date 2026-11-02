import About from "@/components/organisms/About";
import Contact from "@/components/organisms/Contact";
import Education from "@/components/organisms/Education";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Projects from "@/components/organisms/Projects";
import Skills from "@/components/organisms/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
