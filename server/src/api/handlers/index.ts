import { type Socket } from "socket.io";
import { roomsHandler } from "./rooms.handler";
import { usersHandler } from "./users.handler";

export const initHandlers = (socket: Socket) => {
  roomsHandler(socket);
  usersHandler(socket);
};
