import { RequestHandler, Router } from "express";
import { usersService } from "./users.service";

class UsersController {
  router = Router();

  constructor() {
    this.router.get("/:id", this.findOne());
    this.router.get("/", this.findAll());

    this.router.put("/:id", this.update());

    this.router.get("/:username/profile", this.findOneProfile());
  }

  findOne(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const user = await usersService.findUserById(id);

        if (!user) return res.status(404).send(user);
        return res.status(200).send(user);
      } catch (err) {
        return res.status(500).send(err);
      }
    };
  }

  findOneProfile(): RequestHandler {
    return async (req, res) => {
      try {
        const username = req.params["username"];
        const user = await usersService.findUserProfileByUsername(username);
        if (!user) {
          return res.status(404).send();
        }
        return res.status(200).send(user);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  findAll(): RequestHandler {
    return async (req, res) => {
      try {
        const users = await usersService.findAll({});
        res.status(200).send(users);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  update(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const user = await usersService.update(id, req.body);
        res.status(200).send(user);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }
}

export const usersController = new UsersController();
