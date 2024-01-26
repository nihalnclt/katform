import { IconType } from "react-icons";

export type Form = {
  fields: FormField[];
};

export type FormField = {
  ref: string;
  type: string;
  label?: string;
  placeholder?: string;
  description?: string;
};

export type FBSidebarField = {
  name: string;
  icon: IconType;
  type: string;
  bgColor: string;
};
