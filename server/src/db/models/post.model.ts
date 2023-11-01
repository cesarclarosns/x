import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TPost = InferSchemaType<typeof postSchema>;
export type TPostHydrated = HydratedDocument<
  InferSchemaType<typeof postSchema>
>;
export type TPostFilterQuery = FilterQuery<TPost>;
export type TPostProjectionType = ProjectionType<TPost>;
export type TPostQueryOptions = QueryOptions<TPost>;

export const Post = model("Post", postSchema, "posts");
