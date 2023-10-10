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
    fileType: {
      type: String,
      enum: ["image", "video", "file"],
      required: true,
    },
    fileName: { type: String, required: true },
    fileSize: { type: Number, required: true },
    filePath: { type: String, required: true },
    fileUrl: { type: String, required: true },
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
