import { TChat } from "@/db/models/chat.model";
import { TMessage } from "@/db/models/message.model";
import { IDefaultCallbackResponse } from "@/shared/interfaces";

export default interface IServerToClientEvents {
  "chats/new-message": (ev: {
    chat: Partial<TChat>;
    message: Partial<TMessage>;
  }) => void;

  "chats/chat/new-message": (ev: {
    chat: Partial<TChat>;
    message: Partial<TMessage>;
  }) => void;

  "chats/chat/user-typing": (ev: {
    chat: Partial<TChat>;
    userId: string;
  }) => void;

  // "users/get-status": () => void;
  // noArg: () => void;
  // basicEmit: (a: number, b: string, c: Buffer) => void;
  // withAck: (d: string, callback: (e: number) => void) => void;
}
