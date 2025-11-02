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
  setPosition: (coords: LatLngExpression) => void;
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

    map.on("moveend", handleMove);

    return () => {
      map.off("moveend", handleMove);
    };
  }, [map, setPosition]);

  return <Marker position={position} icon={pinLocationIcon} />;
};

interface MapProps {
  locationCoordinates: LatLngExpression;
  onLocationChange: (coords: LatLngExpression) => void;
}

const Map = ({ locationCoordinates, onLocationChange }: MapProps) => {
  const [shouldRecenter, setShouldRecenter] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      onLocationChange([coords.latitude, coords.longitude]);
      setShouldRecenter(true);
    });
  }, [onLocationChange]);

  return (
    <div className="space-y-2">
      <h4 className="text-sm md:text-base font-normal text-center md:text-right">
        ثبت روی نقشه
      </h4>

      <div className="w-full h-96 overflow-hidden border shadow-sm rounded-xl">
        <MapContainer
          className="w-full h-full z-10"
          scrollWheelZoom={false}
          center={locationCoordinates}
          zoom={13}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MapMover
            setPosition={onLocationChange}
            position={locationCoordinates}
            shouldRecenter={shouldRecenter}
            setShouldRecenter={setShouldRecenter}
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
