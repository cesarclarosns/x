import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  mongo,
} from "mongoose";

const contentSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["image", "video"],
      required: true,
    },
    name: { type: String, required: true },
    key: { type: String, required: true },
    url: { type: String, required: true },
    hash: { type: String, required: true },
    size: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    isFree: { type: Boolean, required: true },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TContent = HydratedDocument<InferSchemaType<typeof contentSchema>>;
export type TContentFilterQuery = FilterQuery<TContent>;
export type TContentQueryOptions = QueryOptions<TContent>;

export const Content = model("Content", contentSchema, "contents");
