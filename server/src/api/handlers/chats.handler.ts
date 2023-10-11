import { Socket } from "socket.io";
import { chatsService } from "../chats/chats.service";

type TJoinChatPayload = {
  chatId: string;
};

type TEventType = "send_message" | "read_message" | "user_typing";
type TEventPayload = {
  message: any;
  user: any;
};
type TSendEventPayload = {
  chatId: string;
  eventType: TEventType;
  eventPayload: TEventPayload;
};

function payloadEventTypeIsSendMessage() {}

export const chatsHandler = (socket: Socket) => {
  socket.on("chats:join_chat", (payload: TJoinChatPayload) => {
    socket.join(`chats:chat:${payload.chatId}`);
  });

  socket.on("chats:send_event", async (payload: TSendEventPayload) => {
    if (payload.eventType == "send_message") {
      await chatsService.createMessage();
      socket.broadcast.to("").emit(`chats:chat:${payload.chatId}`, payload);
    }

    if (payload.eventType == "read_message") {
      await chatsService.createLastReadMessagePerUser();
    }

    if (payload.eventType == "user_typing") {
      socket.broadcast.emit(`chats:chat:${payload.chatId}`, payload);
    }
  });
};
