export interface MongoDbOptions {
  reconnectInterval: number;
}

export type FormField = {
  label?: string;
  ref: string;
  properties: {};
  validations: {
    required: boolean;
  };
  fieldType: string;
};

export type CreateForm = {
  formName: string;
  formId: string;
  fields: FormField[];
};
