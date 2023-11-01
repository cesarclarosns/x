import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  mongo,
} from "mongoose";

const userDealSchema = new Schema(
  {
    userDealUserId: { type: mongoose.Schema.Types.ObjectId },
    userId: { type: mongoose.Schema.Types.ObjectId },
    type: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    isPaid: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active"],
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TUserDeal = HydratedDocument<
  InferSchemaType<typeof userDealSchema>
>;
export type TUserDealFilterQuery = FilterQuery<TUserDeal>;
export type TUserDealQueryOptions = QueryOptions<TUserDeal>;

export const UserDeal = model("UserDeal", userDealSchema, "userDeals");
