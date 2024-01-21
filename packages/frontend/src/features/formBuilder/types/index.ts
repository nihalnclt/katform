export type Form = {
  fields: FormField[];
};

export type FormField = {
  ref: string;
  label: string;
  type: string;
};
