import { IDocument } from "@/shared/interfaces";
import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const lastReadMessagePerUserSchema = new Schema(
  {
    messageId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TLastReadMessagePerUser = InferSchemaType<
  typeof lastReadMessagePerUserSchema
> &
  IDocument;
export type TLastReadMessagePerUserHydrated = HydratedDocument<
  InferSchemaType<typeof lastReadMessagePerUserSchema>
>;
export type TLastReadMessagePerUserFilterQuery =
  FilterQuery<TLastReadMessagePerUser>;
export type TLastReadMessagePerUserProjectionType =
  ProjectionType<TLastReadMessagePerUser>;
export type TLastReadMessagePerUserQueryOptions =
  QueryOptions<TLastReadMessagePerUser>;

export const LastReadMessagePerUser = model(
  "LastReadMessagePerUser",
  lastReadMessagePerUserSchema,
  "lastReadMessagePerUsers"
);
