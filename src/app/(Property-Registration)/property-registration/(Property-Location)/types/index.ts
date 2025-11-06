import { LatLngExpression } from "leaflet";

interface Values {
  province: string;
  sideStreet: string;
  mainStreet: string;
  fullAddress: string;
}

interface FormProps {
  provinces: {
    _id: string;
    faName: string;
    enName: string;
    locationCoordinates: LatLngExpression;
  }[];
}

export type { Values, FormProps };
