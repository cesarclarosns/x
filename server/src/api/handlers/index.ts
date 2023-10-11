import { type Socket } from "socket.io";
import { usersHandler } from "./users.handler";
import { chatsHandler } from "./chats.handler";

export const initHandlers = (socket: Socket) => {
  chatsHandler(socket);
  usersHandler(socket);
};
