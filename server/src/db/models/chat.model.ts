import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
} from "mongoose";

const chatSchema = new Schema(
  {
    type: { type: String, enum: ["one-to-one", "group"] },
    name: { type: String, required: false },
    participants: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TChat = HydratedDocument<InferSchemaType<typeof chatSchema>>;
export type TChatFilterQuery = FilterQuery<TChat>;
export type TChatQueryOptions = QueryOptions<TChat>;

export const Chat = model("Chat", chatSchema, "chats");
