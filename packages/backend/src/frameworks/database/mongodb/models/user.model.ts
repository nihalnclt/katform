import { Model, Schema, model, Document } from "mongoose";

interface UserAttrs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface UserModel extends Model<UserDoc> {}

interface UserDoc extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
        },
        password: {
            type: String,
        },
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

export const User = model<UserDoc, UserModel>("User", userSchema);
