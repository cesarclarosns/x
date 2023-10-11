import { RequestHandler, Router } from "express";

class ChatsController {
  router = Router();
  constructor() {
    this.router.get("/", this.findAll());
    this.router.get("/:id", this.findOne());
    this.router.post("/", this.create());
    this.router.put("/:id", this.update());

    this.router.post("/messages", this.createMessage());
    this.router.get("/messages/:id", this.findAllMessages());
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
}

const chatsController = new ChatsController();
