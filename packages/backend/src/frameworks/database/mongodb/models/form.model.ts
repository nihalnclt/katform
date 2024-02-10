import mongoose from "mongoose";

import { FormField } from "../../../../core/types";

interface FormDoc extends mongoose.Document {
  userId: string;
  formName: string;
  formId: string;
  fields: FormField[];
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface FormModel extends mongoose.Model<FormDoc> {}

const formSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    formName: { type: String, required: true },
    formId: { type: String, required: true, unique: true },
    fields: {
      type: [
        {
          label: { type: String },
          ref: { type: String, required: true },
          properties: {},
          validations: {
            required: { type: Boolean, required: true },
          },
          fieldType: {
            type: String,
            required: true,
            lowercase: true,
            enum: ["short-text", "long-text"],
          },
        },
      ],
      required: true,
    },
    isDeleted: { type: Boolean, requaired: true, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Form = mongoose.model<FormDoc, FormModel>("Form", formSchema);

export { Form };
