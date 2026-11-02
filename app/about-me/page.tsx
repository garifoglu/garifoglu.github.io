import type { Metadata } from "next";
import Blog from "@/components/organisms/Blog";
import Container from "@/components/atoms/Container";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import JourneyMap from "@/components/organisms/JourneyMap";

export const metadata: Metadata = {
  title: "About me | Gökhan Arifoglu",
  description: "Places I have worked, studied and visited, and writing about me.",
};

export default function AboutMe() {
  return (
    <>
      <Header />
      <Container id="AboutMe">
        <h1>About me</h1>
        <p className="max-w-2xl pt-6 text-base text-white/80">
          Music teacher turned digital pedagogy and EdTech specialist, based in Finland.
        </p>
      </Container>
      <JourneyMap />
      <Blog />
      <Footer />
    </>
  );
}
