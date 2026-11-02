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
    <Container id="Map">
      <h2>My journey</h2>
      <p className="pb-6 text-base text-white/80">
        Places where I have worked and studied, and places I have visited. Click a marker to read more.
      </p>
      <JourneyMapInner />
      <div className="flex flex-wrap gap-6 pt-4 text-sm text-white/70">
        <span className="flex items-center gap-2">
          <span className="map-pin map-pin-work" /> Worked or studied
        </span>
        <span className="flex items-center gap-2">
          <span className="map-pin map-pin-visited" /> Visited
        </span>
      </div>
    </Container>
  );
}
