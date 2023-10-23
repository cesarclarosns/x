import { Socket } from "socket.io";
import { io } from "@/api";
import ICustomSocket from "@/shared/interfaces/CustomSocket";

export const usersHandler = (socket: ICustomSocket) => {
  socket.on("error", () => {});

  socket.on("disconnect", () => {});

  socket.on("users/get-status", (ev, cb) => {
    try {
      ev.userIds.forEach(() => {});
      cb(null, { status: "success", payload: { online: [], offline: [] } });
    } catch (err) {
      cb(err);
    }
  });
};
