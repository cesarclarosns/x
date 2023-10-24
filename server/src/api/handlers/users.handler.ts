import { io } from "@/api";
import { logger } from "@/libs/logger";
import ICustomSocket from "@/shared/interfaces/custom-socket";
import { usersService } from "../users/users.service";

const handleOnConnect = async (socket: ICustomSocket) => {
  logger.info(null, "handleOnConnect", socket.id);
  try {
    let room = `users:${socket.data.user.id}`;
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
      let online: string[] = [],
        offline: string[] = [],
        away: string[] = [];

      await Promise.all(
        ev.userIds.map(async (userId) => {
          const sockets = await io.in(userId).fetchSockets();
          if (sockets.length) {
            // If the user is connected check if the user has a predifined status
            let user = await usersService.findOne({ id: userId });
            if (user?.status) {
              if (user.status == "online") return online.push(userId);
              if (user.status == "away") return away.push(userId);
            } else {
              return online.push(userId);
            }
          }
          return offline.push(userId);
        })
      );

      cb(null, { status: "success", payload: { online, offline, away } });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
};
