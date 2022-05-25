import { MapContainer, MapContainerProps, TileLayer } from "react-leaflet";
import clsx from "clsx";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

const Map = ({
  children,
  center = [51.505, -0.09],
  ...props
}: MapContainerProps) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={true}
      className={clsx(styles.container, "map")}
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
};

export default Map;
