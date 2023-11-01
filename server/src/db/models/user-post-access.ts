import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const userPostAccessSchema = new Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TUserPostAccess = InferSchemaType<typeof userPostAccessSchema>;
export type TUserPostAccessHydrated = HydratedDocument<
  InferSchemaType<typeof userPostAccessSchema>
>;
export type TUserPostAccessFilterQuery = FilterQuery<TUserPostAccess>;
export type TUserPostAccessProjectionType = ProjectionType<TUserPostAccess>;
export type TUserPostAccessQueryOptions = QueryOptions<TUserPostAccess>;

export const UserPostAccess = model(
  "UserPostAccess",
  userPostAccessSchema,
  "userPostAccesss"
);
