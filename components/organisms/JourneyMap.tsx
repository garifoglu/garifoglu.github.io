"use client";
import dynamic from "next/dynamic";
import Container from "../atoms/Container";

// Leaflet needs the browser, so it must not render on the server.
const JourneyMapInner = dynamic(() => import("../molecules/JourneyMapInner"), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full rounded-lg bg-white/5 md:h-[520px]" />,
});

export default function JourneyMap() {
  return (
    <Container id="Journey">
      <h2>My journey</h2>
      <p className="pb-8 text-base text-white/80">
        From music teaching in Turkey to digital pedagogy in Finland. Click a marker to see what I did there.
      </p>
      <JourneyMapInner />
    </Container>
  );
}
