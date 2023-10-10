import { Socket } from "socket.io";
import { redisClient } from "../../cache";

type TUserStatus = "online" | "offline";

const users: {
  [key: string]: {
    status: TUserStatus;
    sockets: string[];
  };
} = {};

export const usersHandler = (socket: Socket) => {
  socket.on("disconnect", () => {
    console.log("usersHandler disconnect:", socket.id);
  });
  socket.on("disconnecting", () => {
    console.log("usersHandler disconnecting:", socket.id);
  });
};
