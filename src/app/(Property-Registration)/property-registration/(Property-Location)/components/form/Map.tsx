"use client";

import "leaflet/dist/leaflet.css";
import leaflet, { LatLngExpression } from "leaflet";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const pinLocationIcon = leaflet.icon({
  iconUrl: "/images/png/location-pin.png",
  iconSize: [45, 45],
});

interface MapMoverProps {
  shouldRecenter: boolean;
  position: LatLngExpression;
  setPosition: Dispatch<SetStateAction<LatLngExpression>>;
  setShouldRecenter: Dispatch<SetStateAction<boolean>>;
}

const MapMover = ({
  position,
  setPosition,
  shouldRecenter,
  setShouldRecenter,
}: MapMoverProps) => {
  const map = useMap();

  useEffect(() => {
    if (shouldRecenter) {
      map.setView(position);
      setShouldRecenter(false);
    }
  }, [shouldRecenter, position, map, setShouldRecenter]);

  useEffect(() => {
    const handleMove = () => {
      const center = map.getCenter();
      setPosition([center.lat, center.lng]);
    };

    map.on("move", handleMove);

    return () => {
      map.off("move", handleMove);
    };
  }, [map, setPosition]);

  return <Marker position={position} icon={pinLocationIcon} />;
};

const Map = () => {
  const [shouldRecenter, setShouldRecenter] = useState(false);
  const [position, setPosition] = useState<LatLngExpression>([
    35.69977180653842, 51.33803060889542,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setPosition([coords.latitude, coords.longitude]);
      setShouldRecenter(true);
    });
  }, []);

  return (
    <div className="space-y-2">
      <h4 className="text-sm md:text-base font-normal text-center md:text-right">
        ثبت روی نقشه
      </h4>

      <div className="w-full h-96 overflow-hidden border shadow-sm rounded-xl">
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

          <MapMover
            position={position}
            setPosition={setPosition}
            shouldRecenter={shouldRecenter}
            setShouldRecenter={setShouldRecenter}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
