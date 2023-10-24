import { IDocument } from "@/shared/interfaces";
import {
  Schema,
  model,
  InferSchemaType,
  ProjectionType,
  FilterQuery,
  QueryOptions,
  HydratedDocumentFromSchema,
} from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true, sparse: true },
    password: { type: String },
    username: { type: String, unique: true, sparse: true, required: true },
    googleId: { type: String, unique: true, sparse: true },
    displayName: { type: String },
    profilePicture: { type: String },
    emailVerified: { type: Boolean, default: false, required: false },
    status: {
      type: String,
      enum: ["online", "offline", "away"],
      default: "online",
      required: false,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export type TUser = InferSchemaType<typeof userSchema> & IDocument;
export type TUserHydrated = HydratedDocumentFromSchema<typeof userSchema>;
export type TUserFilterQuery = FilterQuery<TUser>;
export type TUserProjectionType = ProjectionType<TUser>;
export type TUserQueryOptions = QueryOptions<TUser>;

export const User = model("User", userSchema, "users");
