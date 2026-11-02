import type { Metadata } from "next";
import Blog from "@/components/organisms/Blog";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import JourneyMap from "@/components/organisms/JourneyMap";
import Story from "@/components/organisms/Story";

export const metadata: Metadata = {
  title: "About me | Gökhan Arifoglu",
  description: "My story, hobbies, the places I have worked, studied and visited, and writing about me.",
};

export default function AboutMe() {
  return (
    <>
      <Header />
      <Story />
      <JourneyMap />
      <Blog />
      <Footer />
    </>
  );
}
