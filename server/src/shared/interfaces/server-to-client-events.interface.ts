import { TChat } from "@/db/models/chat.model";
import { TMessage } from "@/db/models/message.model";
import { IDefaultCallbackResponse } from "@/shared/interfaces";

export default interface IServerToClientEvents {
  "chats/new-message": (ev: {
    chat: Partial<TChat>;
    message: Partial<TMessage>;
  }) => void;

  "chats/chat/new-message": (ev: {
    chatId: string;
    message: Partial<TMessage>;
  }) => void;

  "chats/chat/user-typing": (ev: { chatId: string; userId: string }) => void;

  "chats/chat/read-message": (ev: { chatId: string; userId: string }) => void;
}
