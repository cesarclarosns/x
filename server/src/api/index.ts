import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import "../api/auth/auth.strategies";
import { Server } from "socket.io";
import { createServer } from "http";

import { apiRouter } from "./router";

import { cors } from "./middlewares/cors.middleware";
import { logger } from "./middlewares/logger.middleware";
import { initHandlers } from "./handlers";

export const app = express();

app.use(logger);
app.use(cors);

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize({}));

app.use("/api", apiRouter);

export const httpServer = createServer(app);
export const io = new Server(httpServer, {
  path: "/api/socket.io",
  cors: {
    origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  initHandlers(socket);
});
