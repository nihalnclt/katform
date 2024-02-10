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
  userId: string;
  formName: string;
  formId: string;
  fields: FormField[];
};

export type CreateUser = {
  name: string;
  email: string;
  password: string;
};
