import mongoose from "mongoose";

interface UserModel extends mongoose.Model<UserDoc> {}

interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  isDeleted: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = doc._id;
        delete ret?._id;
        delete ret?.password;
        delete ret?.__v;
      },
    },
  }
);

export const User = mongoose.model<UserDoc, UserModel>("User", userSchema);
