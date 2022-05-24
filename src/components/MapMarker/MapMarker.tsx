import L from "leaflet";
import { Marker, MarkerProps } from "react-leaflet";

const markerIcon: L.Icon = L.icon({
  iconUrl: "/marker.png",
  iconAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  className: "leaflet-marker-icon",
});

const MapMarker = (props: MarkerProps) => {
  return <Marker icon={markerIcon} {...props} />;
};

export default MapMarker;
