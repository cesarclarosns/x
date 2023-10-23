import { TChat } from "@/db/models/chat.model";
import { TMessage } from "@/db/models/message.model";
import { IDefaultCallbackResponse } from "@/shared/interfaces";

export default interface IClientToServerEvents {
  "chats/new-message": (
    ev: {
      chat: Partial<TChat>;
      message: Partial<TMessage>;
    },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/join-chat": (
    ev: { chat: Partial<TChat> },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/leave-chat": (
    ev: { chat: Partial<TChat> },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/new-message": (
    ev: {
      chat: Partial<TChat>;
      message: Partial<TMessage>;
    },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/user-typing": (
    ev: {
      chat: Partial<TChat>;
      userId: string;
    },
    cb: (err: any, response?: IDefaultCallbackResponse) => void
  ) => void;

  "users/get-status": (
    ev: { userIds: string[] },
    cb: (
      err: any,
      response?: IDefaultCallbackResponse & {
        payload: { online: string[]; offline: string[] };
      }
    ) => void
  ) => void;
}
