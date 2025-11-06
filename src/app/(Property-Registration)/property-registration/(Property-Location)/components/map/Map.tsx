"use client";

import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";
import React, { useEffect } from "react";
import useFormsState from "@propertyRegistration/stores/useFormsState";
import { useLocationStore } from "@propertyLocationRegistration/stores/locationState";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

const pinLocationIcon = leaflet.icon({
  iconUrl: "/images/png/location-pin.png",
  iconSize: [45, 45],
});

const MapMover = () => {
  const {
    locationCoordinates,
    shouldRecenterMap,
    setLocationCoordinates,
    setShouldRecenterMap,
  } = useLocationStore();

  const map = useMap();

  useEffect(() => {
    if (shouldRecenterMap) {
      map.setView(locationCoordinates);
      setShouldRecenterMap(false);
    }
  }, [shouldRecenterMap, locationCoordinates, map, setShouldRecenterMap]);

  useEffect(() => {
    const handleMove = () => {
      const center = map.getCenter();
      setLocationCoordinates([center.lat, center.lng]);
    };

    map.on("move", handleMove);

    return () => {
      map.off("move", handleMove);
    };
  }, [map, setLocationCoordinates]);

  return <Marker position={locationCoordinates} icon={pinLocationIcon} />;
};

const Map = () => {
  const { locationCoordinates, setLocationCoordinates, setShouldRecenterMap } =
    useLocationStore.getState();
  const { propertyLocationCoordinates } = useFormsState();

  useEffect(() => {
    if (propertyLocationCoordinates) {
      setLocationCoordinates(propertyLocationCoordinates);
    } else {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setLocationCoordinates([coords.latitude, coords.longitude]);
      });
    }
    setShouldRecenterMap(true);
  }, [
    propertyLocationCoordinates,
    setLocationCoordinates,
    setShouldRecenterMap,
  ]);

  return (
    <div className="w-full h-96 overflow-hidden border shadow-sm rounded-xl">
      <MapContainer
        className="w-full h-full z-10"
        center={locationCoordinates}
        scrollWheelZoom={false}
        zoom={7}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <MapMover />
      </MapContainer>
    </div>
  );
};

export default Map;
