import {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  now,
} from "mongoose";

const tokenSchema = new Schema(
  {
    token: { type: String, required: true },
    userId: { type: Schema.ObjectId, required: true },
    type: {
      type: String,
      required: true,
      enum: ["refresh_token", "reset_password", "verify_email"],
    },
    expireAt: {
      type: Schema.Types.Date,
      expires: 0, // Expires after n seconds
    },
  },
  {
    timestamps: true,
  }
);

export type TToken = HydratedDocument<InferSchemaType<typeof tokenSchema>>;
export type TokenFilterQuery = FilterQuery<TToken>;
export type TokenQueryOptions = QueryOptions<TToken>;

export const Token = model("Token", tokenSchema, "tokens");
