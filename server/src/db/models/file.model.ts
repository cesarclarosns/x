import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  mongo,
} from "mongoose";

const fileSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["image", "video", "file"],
      required: true,
    },
    name: { type: String, required: true },
    key: { type: String, required: true },
    url: { type: String, required: true },
    hash: { type: String, required: true },
    size: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TFile = HydratedDocument<InferSchemaType<typeof fileSchema>>;
export type TFileFilterQuery = FilterQuery<TFile>;
export type TFileQueryOptions = QueryOptions<TFile>;

export const File = model("File", fileSchema, "files");
