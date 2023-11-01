import { io } from "@/api";
import { logger } from "@/libs/logger";
import ICustomSocket from "@/shared/interfaces/custom-socket";
import { usersService } from "../features/users/users.service";
import mongoose from "mongoose";

const handleOnConnect = async (socket: ICustomSocket) => {
  logger.info(null, "handleOnConnect", socket.id);
  try {
    let room = `users:${socket.data.user._id}`;
    socket.join(room);
  } catch (err) {
    console.log(err);
  }
};

const handleOnDisconnect = async (socket: ICustomSocket) => {
  logger.info(null, "handleOnDisconnect", socket.id);
  try {
  } catch (err) {
    console.log(err);
  }
};

export const usersHandler = (socket: ICustomSocket) => {
  handleOnConnect(socket);

  socket.on("disconnect", (reason) => {
    handleOnDisconnect(socket);
  });

  socket.on("users/get-status", async (ev, cb) => {
    try {
      logger.info(ev, "users/get-status");
      let online: string[] = [],
        offline: string[] = [],
        away: string[] = [];

      await Promise.all(
        ev.userIds.map(async (userId) => {
          let room = `users:${userId}`;
          const sockets = await io.in(room).fetchSockets();

          if (!sockets.length) return offline.push(userId);

          let user = await usersService.findOne({
            _id: new mongoose.Types.ObjectId(userId),
          });
          if (!user) return online.push(userId);
          if (user.status == "offline") return offline.push(userId);
          return online.push(userId);
        })
      );

      cb(null, { status: "success", payload: { online, offline, away } });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
};
