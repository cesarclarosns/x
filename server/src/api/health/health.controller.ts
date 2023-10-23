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
      try {
        const sockets = await io.fetchSockets();
        const data = sockets.map((socket) => {
          console.log(socket.rooms);
          return {
            id: socket.id,
            rooms: Array.from(socket.rooms),
          };
        });
        res.send(data);
      } catch (err) {
        res.status(500).send(err?.toString());
      }
    };
  }
}

export const healthController = new HealthController();
