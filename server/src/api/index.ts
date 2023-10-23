import express from "express";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import helmet from "helmet";
import passport from "passport";
import { cors } from "@/api/middlewares/cors.middleware";

import "@/api/auth/auth.strategies";
import { apiRouter } from "@/api/router";
import { initHandlers } from "@/api/handlers";
import { logger } from "@/api/middlewares/logger.middleware";
import { socketAuth } from "@/api/middlewares/socket-auth.middlewar";
import {
  IClientToServerEvents,
  IInterServerEvents,
  IServerToClientEvents,
  ISocketData,
} from "@/shared/interfaces";

export const app = express();

app.use(helmet());
app.use(logger());
app.use(cors());

app.use(express.json());
app.use(cookieParser());

app.use(passport.initialize({}));

app.use("/api", apiRouter);

export const httpServer = createServer(app);
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

io.use(socketAuth());
io.on("connection", (socket) => {
  console.log("connection:", { sockets: io.sockets, rooms: socket.rooms });
  initHandlers(socket);
});
