import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const userSubscriptionSchema = new Schema(
  {
    subscriptionPlanUserId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    subscriptionPlanId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    renewalStatus: {
      type: String,
      enum: ["active", "canceled"],
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TUserSubscription = InferSchemaType<typeof userSubscriptionSchema>;
export type TUserSubscriptionHydrated = HydratedDocument<
  InferSchemaType<typeof userSubscriptionSchema>
>;
export type TUserSubscriptionFilterQuery = FilterQuery<TUserSubscription>;
export type TUserSubscriptionProjectionType = ProjectionType<TUserSubscription>;
export type TUserSubscriptionQueryOptions = QueryOptions<TUserSubscription>;

export const UserSubscription = model(
  "UserSubscription",
  userSubscriptionSchema,
  "userSubscriptions"
);
