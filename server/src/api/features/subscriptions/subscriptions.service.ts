import {
  SubscriptionPlan,
  TSubscriptionPlan,
  TSubscriptionPlanFilterQuery,
  TSubscriptionPlanQueryOptions,
} from "@/db/models/subscription-plan.model";
import mongoose from "mongoose";
import { chatsService } from "../chats/chats.service";
import {
  TUserSubscription,
  UserSubscription,
} from "@/db/models/user-subscription.model";
import { logger } from "@/libs/logger";

class SubscriptionsService {
  async findOneSubscriptionPlan(
    filter: TSubscriptionPlanFilterQuery,
    options: TSubscriptionPlanQueryOptions = {}
  ) {
    const subscriptionPlan = await SubscriptionPlan.findOne(
      filter,
      {},
      options
    );
    return subscriptionPlan;
  }

  async findOneSubscriptionPlanById(id: string) {
    const subscriptionPlan = await SubscriptionPlan.findOne({
      _id: id,
    });
    return subscriptionPlan;
  }

  async findAllSubscriptionPlans(filter: TSubscriptionPlanFilterQuery) {
    const subscriptionPlans = await SubscriptionPlan.find(filter);
    return subscriptionPlans;
  }

  async updateSubscriptionPlan(id: string, update: Partial<TSubscriptionPlan>) {
    const opResult = await SubscriptionPlan.updateOne(
      {
        _id: id,
      },
      update
    );

    const subscriptionPlan = await this.findOneSubscriptionPlanById(id);
    return subscriptionPlan;
  }

  async createSubscriptionPlan(create: Partial<TSubscriptionPlan>) {
    const subscriptionPlan = await SubscriptionPlan.create(create);
    return subscriptionPlan;
  }

  async findOneUserSubscriptionById(id: string) {
    const userSubscription = await UserSubscription.findById(id);
    return userSubscription;
  }

  async createUserSubscription(create: Partial<TUserSubscription>) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Find subscription plan
      const subscriptionPlan = await this.findOneSubscriptionPlan(
        {
          _id: create.subscriptionPlanId,
        },
        { session }
      );
      if (!subscriptionPlan) throw "Subscription plan does not exist";

      // Create user subscription only if the user
      // does not already have an active subscription
      const oldUserSubscription = await UserSubscription.findOne(
        {
          subscriptionPlanUserId: subscriptionPlan.userId,
          subscriptionPlanId: subscriptionPlan.id,
          userId: create.userId,
        },
        { session }
      );

      if (oldUserSubscription)
        throw "User already has an active subscription to this user";

      const userSubscription = await UserSubscription.create([create], {
        session,
      });

      // Create chat
      const chatParticipants = [subscriptionPlan.userId, create.userId!];
      const chat = await chatsService.findOne(
        {
          type: "one-to-one",
          participants: {
            $all: chatParticipants,
          },
        },
        {
          session,
        }
      );

      if (!chat) {
        await chatsService.create(
          {
            type: "one-to-one",
            participants: chatParticipants,
          },
          {
            session,
          }
        );
      }

      // Create analytics

      session.commitTransaction();
      return userSubscription;
    } catch (err) {
      session.abortTransaction();
    } finally {
      session.endSession();
    }
  }

  async updateUserSubscription(id: string, update: Partial<TUserSubscription>) {
    const opResult = await UserSubscription.updateOne({ _id: id }, update);

    logger.debug(opResult, "updateUserSubscription");

    const userSubscription = await this.findOneUserSubscriptionById(id);
    return userSubscription;
  }
}

export const subscriptionsService = new SubscriptionsService();
