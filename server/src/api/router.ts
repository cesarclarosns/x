import express from "express";
import { healthController } from "./health/health.controller";
import { authController } from "./auth/auth.controller";

export const apiRouter = express();

apiRouter.use("/health", healthController.router);
apiRouter.use("/auth", authController.router);
