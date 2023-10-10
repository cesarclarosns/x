import { Socket } from "socket.io";

export const chatsHandler = (socket: Socket) => {
  socket.on("chats:message", (message) => {});

  socket.on("chats:send_message", (payload) => {
    console.log({ payload });
  });

  socket.on("chats:read_messages", (payload: any) => {
    console.log({ payload });
    const { room, user } = payload;
  });
};
