import { LatLngExpression } from "leaflet";
import { create } from "zustand";

type UseLocationStore = {
  locationCoordinates: LatLngExpression;
  shouldRecenterMap: boolean;

  setLocationCoordinates: (locationCoordinates: LatLngExpression) => void;
  setShouldRecenterMap: (shouldRecenterMap: boolean) => void;
};

const useLocationStore = create<UseLocationStore>((set) => ({
  locationCoordinates: [35.69977180653842, 51.33803060889542],
  shouldRecenterMap: false,

  setLocationCoordinates: (locationCoordinates) => {
    return set({ locationCoordinates });
  },

  setShouldRecenterMap: (shouldRecenterMap) => {
    return set({ shouldRecenterMap });
  },
}));

export { useLocationStore };
