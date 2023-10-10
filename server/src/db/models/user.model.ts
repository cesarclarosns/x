import {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  ProjectionType,
  FilterQuery,
  QueryOptions,
  Model,
} from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, unique: true },
    password: { type: String },
    username: { type: String, required: true, unique: true },
    googleId: { type: String, unique: true },
    displayName: { type: String },
    profilePicture: { type: String },
    emailVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export type TUser = HydratedDocument<InferSchemaType<typeof userSchema>>;
export type UserFilterQuery = FilterQuery<TUser>;
export type UserProjectionType = ProjectionType<TUser>;
export type UserQueryOptions = QueryOptions<TUser>;

export const User = model("User", userSchema, "users");
