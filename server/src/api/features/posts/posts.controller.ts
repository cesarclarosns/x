import { RequestHandler, Router } from "express";
import { postsService } from "./posts.service";

class PostsController {
  router = Router();

  constructor() {
    this.router.get("/", this.findAll());
    this.router.post("/", this.create());
    this.router.put("/", this.update());
    this.router.get("/:id", this.findOne());
    this.router.delete("/:id", this.delete());
  }

  findOne(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const post = await postsService.findOneById(id, {});

        if (!post) return res.status(404).send({});
        return res.status(200).send(post);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: err?.toString() });
      }
    };
  }

  findAll(): RequestHandler {
    return async (req, res) => {
      try {
        const posts = await postsService.findAll({}, {});
        res.status(200).send(posts);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: err?.toString() });
      }
    };
  }

  create(): RequestHandler {
    return async (req, res) => {
      try {
        const post = await postsService.create(req.body);
        res.status(201).send(post);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: err?.toString() });
      }
    };
  }

  update(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const post = await postsService.update(id, req.body, {});
        res.status(200).send(post);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: err?.toString() });
      }
    };
  }

  delete(): RequestHandler {
    return async (req, res) => {
      try {
        const id = req.params["id"];
        const post = await postsService.delete(id);
        res.status(200).send(post);
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: err?.toString() });
      }
    };
  }
}

export const postsController = new PostsController();
