import { Socket } from "socket.io";

export const notificationsHandler = (socket: Socket) => {
  socket.on("notifications:send", (payload: any) => {});
};
