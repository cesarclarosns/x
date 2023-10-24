import express from "express";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import helmet from "helmet";
import passport from "passport";
import { createAdapter } from "@socket.io/redis-adapter";

import "@/api/auth/auth.strategies";
import { apiRouter } from "@/api/router";
import { initHandlers } from "@/api/handlers";
import { corsMw } from "@/api/middlewares/cors.middleware";
import { loggerMw } from "@/api/middlewares/logger.middleware";
import { socketAuthMw } from "@/api/middlewares/socket-auth.middlewar";
import {
  IClientToServerEvents,
  IInterServerEvents,
  IServerToClientEvents,
  ISocketData,
} from "@/shared/interfaces";
import { redisClient } from "@/cache";

export const app = express();

app.use(corsMw());
app.use(loggerMw());
app.use(helmet());

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize({}));

app.use("/api", apiRouter);

export const httpServer = createServer(app);
const pubClient = redisClient;
const subClient = pubClient.duplicate();
export const io = new Server<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketData
>(httpServer, {
  path: "/api/socket.io",
  cors: {
    origin: "*",
  },
});
io.adapter(createAdapter(pubClient, subClient));

io.use(socketAuthMw());
io.on("connection", (socket) => {
  console.log("connection");
  initHandlers(socket);
});
