import express from "express";
import { healthController } from "@/api/health/health.controller";
import { authController } from "@/api/auth/auth.controller";
import { fileController } from "@/api/file/file.controller";

export const apiRouter = express();

apiRouter.use("/health", healthController.router);
apiRouter.use("/auth", authController.router);
apiRouter.use("/file", fileController.router);
