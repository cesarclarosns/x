import express from "express";
import { Server } from "socket.io";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken";
import passport from "passport";

import { config } from "../config/config";

import "../api/auth/auth.strategies";
import { apiRouter } from "./router";

import { cors } from "./middlewares/cors.middleware";
import { logger } from "./middlewares/logger.middleware";
import { initHandlers } from "./handlers";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { ITokenPayload } from "../shared/interfaces/TokenPayload.interface";

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

io.use((socket, next) => {
  try {
    const auth = socket.handshake.auth;
    console.log({ auth });

    const payload = jsonwebtoken.verify(
      auth?.accessToken,
      config.ACCESS_TOKEN_SECRET
    );

    socket.data = payload;

    next();
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      console.log({ message: err.message });
      const error = new Error("Unauthorized");
      next(error);
    } else {
      next(new Error(err?.toString()));
    }
  }
});
io.on("connection", (socket) => {
  initHandlers(socket);
});
