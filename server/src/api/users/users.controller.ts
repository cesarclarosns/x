import { Router } from "express";

class UsersController {
  router = Router();

  constructor() {
    this.router.get("/", () => {});
  }
}
