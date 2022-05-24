import { Popup, useMapEvents } from "react-leaflet";
import MapMarker from "../MapMarker";
import { Position } from "../../types";

type Props = {
  position?: Position;
  setPosition: (position: Position) => void;
};

const LocationMarker = ({ position, setPosition }: Props) => {
  const map = useMapEvents({
    click(e) {
      const newPosition: Position = { lat: e.latlng.lat, lng: e.latlng.lng };
      setPosition(newPosition);
      map.flyTo(newPosition, map.getZoom());
    },
  });

  return position ? (
    <MapMarker position={position}>
      <Popup>You are here</Popup>
    </MapMarker>
  ) : null;
};

export default LocationMarker;
