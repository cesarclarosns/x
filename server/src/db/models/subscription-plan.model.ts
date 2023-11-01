import mongoose, {
  Schema,
  model,
  InferSchemaType,
  HydratedDocument,
  FilterQuery,
  QueryOptions,
  ProjectionType,
} from "mongoose";

const subscriptionPlanSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    bundles: [
      {
        duration: {
          type: Number,
          required: true,
        },
        discount: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    strict: false,
    timestamps: true,
  }
);

export type TSubscriptionPlan = InferSchemaType<typeof subscriptionPlanSchema>;
export type TSubscriptionPlanHydrated = HydratedDocument<
  InferSchemaType<typeof subscriptionPlanSchema>
>;
export type TSubscriptionPlanFilterQuery = FilterQuery<TSubscriptionPlan>;
export type TSubscriptionPlanProjectionType = ProjectionType<TSubscriptionPlan>;
export type TSubscriptionPlanQueryOptions = QueryOptions<TSubscriptionPlan>;

export const SubscriptionPlan = model(
  "SubscriptionPlan",
  subscriptionPlanSchema,
  "subscriptionPlans"
);
