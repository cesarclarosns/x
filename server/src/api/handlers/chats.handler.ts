import ICustomSocket from "@/shared/interfaces/custom-socket";
import { io } from "@/api";
import { chatsService } from "../chats/chats.service";

export const chatsHandler = (socket: ICustomSocket) => {
  socket.on("chats/chat/join-chat", (ev, cb) => {
    try {
      let room = `chats:${ev.chatId}`;
      socket.join(room);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/leave-chat", (ev, cb) => {
    try {
      let room = `chats:${ev.chatId}`;
      socket.leave(room);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/new-message", async (ev, cb) => {
    try {
      // Create message
      // Send chats/chat/new-message event to sockets connected to the room "chatId", the event contains the message created
      socket.to(ev.chatId!).emit("chats/chat/new-message", ev);
      // Send chats/new-message event to each participant in the chat (using the "userId" room)
      let chat = await chatsService.findOne();
      let userIds: string[] = [];
      let rooms = userIds.map((userId) => `users:${userId}`);
      socket.to(rooms).emit("chats/new-message", { ...ev, chat: chat! });
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });

  socket.on("chats/chat/user-typing", (ev, cb) => {
    try {
      socket.to(ev.chatId!).emit("chats/chat/user-typing", ev);
      cb(null, { status: "success" });
    } catch (err) {
      console.log(err);
      cb(err);
    }
  });
};
