import { RequestHandler, Router } from "express";

class ChatsController {
  router = Router();

  constructor() {
    this.router.get("/", this.findAll());
    this.router.post("/", this.create());

    this.router.get("/:id", this.findOne());
    this.router.put("/:id", this.update());

    this.router.post("/messages", this.createMessage());

    this.router.get("/messages/:id", this.findAllMessages());

    this.router.post(
      "/last-read-message-per-user",
      this.createLastReadMessagePerUser()
    );
  }

  create(): RequestHandler {
    return (req, res) => {};
  }

  update(): RequestHandler {
    return (req, res) => {};
  }

  findOne(): RequestHandler {
    return (req, res) => {};
  }

  findAll(): RequestHandler {
    return (req, res) => {};
  }

  findAllMessages(): RequestHandler {
    return (req, res) => {};
  }

  createMessage(): RequestHandler {
    return (req, res) => {};
  }

  createLastReadMessagePerUser(): RequestHandler {
    return async (req, res) => {};
  }
}

export const chatsController = new ChatsController();
