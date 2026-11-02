"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";

// Leaflet's default marker images break under bundlers, so use the CDN copies.
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const places: { name: string; pos: [number, number]; text: string }[] = [
  { name: "Kırıkkale", pos: [39.8468, 33.5153], text: "Music science, bachelor's and master's, pedagogical studies (2010–2018)" },
  { name: "Ankara", pos: [39.9334, 32.8597], text: "Music teacher, Cemal Gazeloglu Art Center (2015–2018)" },
  { name: "Alajärvi", pos: [63.0, 23.8167], text: "Erasmus+ and music teacher, Lehtimäen Erityiskansanopisto (2018–2021)" },
  { name: "Jyväskylä", pos: [62.2426, 25.7473], text: "Pedagogical studies, JAMK (2021–2023)" },
  { name: "Kokkola", pos: [63.8385, 23.1307], text: "ICT Engineering, Centria (2023–2027)" },
  { name: "Helsinki", pos: [60.1699, 24.9384], text: "Digital pedagogy, Humak (2026)" },
];

export default function JourneyMapInner() {
  return (
    <MapContainer
      center={[55, 27]}
      zoom={4}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-lg md:h-[520px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      <Polyline positions={places.map((p) => p.pos)} pathOptions={{ color: "#888", weight: 2, dashArray: "6 6" }} />
      {places.map((p) => (
        <Marker key={p.name} position={p.pos} icon={icon}>
          <Popup>
            <strong>{p.name}</strong>
            <br />
            {p.text}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
