import ICustomSocket from "@/shared/interfaces/CustomSocket";
import { io } from "@/api";

export const chatsHandler = (socket: ICustomSocket) => {
  socket.on("chats/chat/join-chat", (ev, cb) => {
    try {
      socket.join(ev.chat.id!);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/leave-chat", (ev, cb) => {
    try {
      socket.leave(ev.chat.id!);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/new-message", (ev, cb) => {
    try {
      // Create message
      // Send chats/chat/new-message event to sockets connected to the room "chatId", the event contains the message created
      socket.to(ev.chat.id!).emit("chats/chat/new-message", ev);
      // Send chats/new-message event to each participant in the chat (using the socketId room)
      io.fetchSockets();
      let socketIds: string[] = [];
      socketIds.forEach((socketId) => {
        socket.to(socketId).emit("chats/new-message", ev);
      });
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/user-typing", (ev, cb) => {
    try {
      socket.to(ev.chat.id!).emit("chats/chat/user-typing", ev);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
};
