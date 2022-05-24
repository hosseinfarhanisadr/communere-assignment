import dynamic from "next/dynamic";
import { UseControllerProps, useController } from "react-hook-form";
import { LocationFormValues, Position } from "types";
import styles from "./MapInput.module.css";

const Map = dynamic(() => import("components/Map"), { ssr: false });
const LocationMarker = dynamic(() => import("components/LocationMarker"), {
  ssr: false,
});

type Props = UseControllerProps<LocationFormValues> & {
  label?: string;
};

const MapInput = ({ name, label, control, rules, ...props }: Props) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <div className={styles.mapContainer}>
        <Map {...props}>
          <LocationMarker
            position={value as Position}
            setPosition={(position) => {
              onChange(position);
            }}
          />
        </Map>
        {error?.message && <span className="text-danger">{error.message}</span>}
      </div>
    </div>
  );
};

export default MapInput;
