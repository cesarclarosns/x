import { RequestHandler, Router } from "express";
import { io } from "..";

class HealthController {
  router = Router();

  constructor() {
    this.router.get("/", this.getHealth());
    this.router.get("/sockets", this.getSockets());
  }

  getHealth(): RequestHandler {
    return async (req, res) => {
      res.send({ status: "up" });
    };
  }

  getSockets(): RequestHandler {
    return async (req, res) => {
      const sockets = await io.fetchSockets();
      const socketIds = sockets.map((socket) => socket.id);
      res.send(socketIds);
    };
  }
}

export const healthController = new HealthController();
