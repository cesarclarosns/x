import express from "express";
import { healthController } from "@/api/features/health/health.controller";
import { authController } from "@/api/features/auth/auth.controller";
import { contentController } from "@/api/features/content/contents.controller";
import { usersController } from "./features/users/users.controller";
import { postsController } from "./features/posts/posts.controller";

export const apiRouter = express();

apiRouter.use("/health", healthController.router);
apiRouter.use("/auth", authController.router);

apiRouter.use("/content", contentController.router);
apiRouter.use("/users", usersController.router);
apiRouter.use("/posts", postsController.router);
