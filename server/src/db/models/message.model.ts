import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const messageSchema = new Schema(
  {
    chatId: {
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
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }],
    price: {
      type: Number,
    },
    isPaid: {
      type: Boolean,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TMessage = InferSchemaType<typeof messageSchema>;
export type TMessageHydrated = HydratedDocument<
  InferSchemaType<typeof messageSchema>
>;
export type TMessageFilterQuery = FilterQuery<TMessage>;
export type TMessageProjectionType = ProjectionType<TMessage>;
export type TMessageQueryOptions = QueryOptions<TMessage>;

export const Message = model("Message", messageSchema, "messages");
