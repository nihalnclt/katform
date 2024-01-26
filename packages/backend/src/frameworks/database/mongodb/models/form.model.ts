import mongoose from "mongoose";

interface FormField {
  label?: string;
  ref: string;
  properties: {};
  validations: {
    required: boolean;
  };
  fieldType: string;
}

interface FormAttrs {
  title: string;
  formId: string;
  fields: FormField[];
}

interface FormDoc extends mongoose.Document {
  title: string;
  formId: string;
  fields: FormField[];
  createdAt: Date;
  updatedAt: Date;
}

interface FormModel extends mongoose.Model<FormDoc> {
  build(attrs: FormAttrs): FormDoc;
}

const formSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    formId: { type: String, required: true },
    fields: {
      type: [
        {
          label: { type: String },
          ref: { type: String, required: true },
          properties: {},
          validations: {
            required: { type: Boolean, required: true },
          },
          fieldType: { type: String, required: true, lowercase: true, enum: [""] },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

// formSchema.statics.build = (attrs: OrderAttrs) => {
//   return new Form(attrs);
// };

const Form = mongoose.model<FormDoc, FormModel>("Form", formSchema);

export { Form };
