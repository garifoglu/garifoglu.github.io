"use client";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import { places } from "@/utils/MapPlaces";

// Simple round pins drawn with CSS (see globals.css), so no marker image files are needed.
const pin = (kind: "work" | "visited") =>
  L.divIcon({
    className: "",
    html: `<span class="map-pin map-pin-${kind}"></span>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
  });

export default function JourneyMapInner() {
  const work = places.filter((p) => p.kind === "work");
  return (
    <MapContainer
      bounds={L.latLngBounds(places.map((p) => p.pos))}
      boundsOptions={{ padding: [40, 40] }}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-lg md:h-[520px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="map-tiles"
      />
      <Polyline positions={work.map((p) => p.pos)} pathOptions={{ color: "#888", weight: 2, dashArray: "6 6" }} />
      {places.map((p) => (
        <Marker key={p.name} position={p.pos} icon={pin(p.kind)}>
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
