export type Position = { lat: number; lng: number };

export type Location = {
  id: string;
  name: string;
  position: Position;
  type: "business" | "home";
  logo: string;
};

export type LocationFormValues = Omit<Location, "logo"> & {
  logo: string | FileList;
};
