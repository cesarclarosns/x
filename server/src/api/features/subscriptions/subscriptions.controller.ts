import { RequestHandler, Router } from "express";
import { subscriptionsService } from "./subscriptions.service";

class SubscriptionsController {
  router = Router();

  constructor() {
    this.router.get("/subscription-plan/:id", this.findOneSubscriptionPlan());
    this.router.put("/subscription-plan/:id", this.updateSubscriptionPlan());

    this.router.get("/user-subscription/:id", this.findOneUserSubscription());
    this.router.put("/user-subscription/:id", this.updateUserSubscription());
    this.router.post("/user-subscription", this.createUserSubscription());
  }

  findOneSubscriptionPlan(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const subscriptionPlan =
          await subscriptionsService.findOneSubscriptionPlanById(id);

        res.status(200).send(subscriptionPlan);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  updateSubscriptionPlan(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const subscriptionPlan =
          await subscriptionsService.updateSubscriptionPlan(id, req.body);

        res.status(200).send(subscriptionPlan);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  findOneUserSubscription(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const userSubscription =
          await subscriptionsService.findOneUserSubscriptionById(id);
        res.status(200).send(userSubscription);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    };
  }

  updateUserSubscription(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const userSubscription =
          await subscriptionsService.updateUserSubscription(id, req.body);
        return res.status(200).send(userSubscription);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    };
  }

  createUserSubscription(): RequestHandler {
    return async (req, res) => {
      try {
        const userSubscription =
          await subscriptionsService.createUserSubscription(req.body);
        return res.status(200).send(userSubscription);
      } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    };
  }
}

export const subscriptionsController = new SubscriptionsController();
