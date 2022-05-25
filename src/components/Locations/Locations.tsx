import { useMemo, useRef, useState } from "react";
import { useMap, Popup, FeatureGroup } from "react-leaflet";
import { editLocation } from "store/LocationSlice";
import { useAppDispatch, useAppSelector } from "store";
import { Location, LocationFormValues } from "types";
import { FeatureGroup as LeafletFeatureGroup } from "leaflet";
import Button from "components/Button";
import MapMarker from "../MapMarker";
import LocationFormModal from "../LocationFormModal";
import styles from "./Locations.module.css";

const Locations = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const dispatch = useAppDispatch();

  const featureGroupRef = useRef<LeafletFeatureGroup>(null);

  const locations = useAppSelector((state) => state.location);

  const map = useMap();

  const eventHandlers = useMemo(
    () => ({
      layeradd() {
        const bounds = featureGroupRef.current?.getBounds();
        if (bounds) {
          map.fitBounds(bounds, { maxZoom: 13, padding: [50, 50] });
        }
      },
    }),
    [map]
  );

  const handleOpenEditModal = (location: Location) => {
    map.closePopup();
    setSelectedLocation(location);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedLocation(null);
  };

  const handleEditLocation = (values: LocationFormValues) => {
    dispatch(editLocation(values));
    handleCloseEditModal();
  };

  return (
    <>
      <FeatureGroup eventHandlers={eventHandlers} ref={featureGroupRef}>
        {locations.map((location) => (
          <MapMarker key={location.id} position={location.position}>
            <Popup>
              <div className={styles.popupContainer}>
                <div className={styles.popupTitle}>Location Details</div>
                <div className={styles.popupContent}>
                  <p className={styles.locationName}>{location.name}</p>
                  <div className={styles.actions}>
                    <Button
                      type="button"
                      color="warning"
                      onClick={() => map.closePopup()}
                    >
                      Close
                    </Button>
                    <Button
                      type="button"
                      color="info"
                      onClick={() => handleOpenEditModal(location)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </Popup>
          </MapMarker>
        ))}
      </FeatureGroup>
      {isEditModalOpen && (
        <LocationFormModal
          edit
          data={selectedLocation as Location}
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          onSubmit={handleEditLocation}
        />
      )}
    </>
  );
};

export default Locations;
