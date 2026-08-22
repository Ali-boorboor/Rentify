"use client";

import leaflet, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const position: LatLngExpression = [35.69977180653842, 51.33803060889542];

const pinLocationIcon = leaflet.icon({
  iconUrl: "/images/location-pin.webp",
  iconSize: [45, 45],
});

const Map = () => {
  return (
    <MapContainer
      className="w-full h-full z-10"
      scrollWheelZoom={false}
      center={position}
      zoom={13}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={pinLocationIcon} />
    </MapContainer>
  );
};

export default Map;
