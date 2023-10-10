import { RequestHandler, Router } from "express";

class HealthController {
  router = Router();

  constructor() {
    this.router.get("/", this.getHealth());
  }

  getHealth(): RequestHandler {
    return async (req, res) => {
      res.send({ status: "up" });
    };
  }
}

export const healthController = new HealthController();
