import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Location, LocationFormValues } from "types";
import Button from "components/Button";
import { Input, MapInput, Select, FileInput } from "components/form";
import Modal from "../Modal";
import styles from "./LocationFormModal.module.css";

type Props = {
  edit?: boolean;
  data?: Location;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: LocationFormValues) => void;
};

const defaultValues: Partial<LocationFormValues> = {
  name: "",
  type: "business",
};

const validationSchema = yup.object({
  name: yup.string().required("Location name is required"),
  position: yup
    .object({
      lat: yup.string().required(),
      lng: yup.string().required(),
    })
    .required("Location is required"),
  type: yup.string().required("Location type is required"),
  logo: yup.mixed().test({
    message: "Logo is required",
    test: (value) =>
      (typeof value === "object" && value?.length !== 0) ||
      typeof value === "string",
  }),
});

const LocationFormModal = ({
  edit,
  data,
  isOpen,
  onClose,
  onSubmit,
}: Props) => {
  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LocationFormValues>({
    defaultValues: edit ? data : defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const handleSave = handleSubmit((values) => {
    const logo =
      typeof values.logo === "object"
        ? URL.createObjectURL(values.logo[0] as File)
        : values.logo;

    onSubmit({ ...values, logo });

    if (!edit) {
      reset();
    }
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Location">
      <form className={styles.container} onSubmit={handleSave}>
        <Input
          label="Location name:"
          error={errors?.name?.message}
          {...register("name")}
        />

        <MapInput name="position" control={control} label="Location on map:" />

        <Select label="Location type:" {...register("type")}>
          <option value="business">Business</option>
          <option value="home">Home</option>
        </Select>

        <FileInput
          label="Logo:"
          accept="image/*"
          error={errors?.logo?.message}
          {...register("logo")}
        />

        <div className={styles.actionsContainer}>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>

          <Button type="submit" color="info">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default LocationFormModal;
