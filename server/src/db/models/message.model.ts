import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
} from "mongoose";

const messageSchema = new Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
    },
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "File" }],
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TMessage = HydratedDocument<InferSchemaType<typeof messageSchema>>;
export type TMessageFilterQuery = FilterQuery<TMessage>;
export type TMessageQueryOptions = QueryOptions<TMessage>;

export const Message = model("Message", messageSchema, "messages");
