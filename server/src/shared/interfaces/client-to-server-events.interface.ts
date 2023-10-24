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
    ev: { chatId: string },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/leave-chat": (
    ev: { chatId: string },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/new-message": (
    ev: {
      chatId: string;
      message: Partial<TMessage>;
    },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/user-typing": (
    ev: {
      chatId: string;
      userId: string;
    },
    cb: (err: any, response?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/read-message": (
    ev: {
      messageId: string;
      chatId: string;
      userId: string;
    },
    cb: (err: any, response?: IDefaultCallbackResponse) => void
  ) => void;

  "users/get-status": (
    ev: { userIds: string[] },
    cb: (
      err: any,
      response?: Omit<IDefaultCallbackResponse, "payload"> & {
        payload: { online: string[]; offline: string[]; away: string[] };
      }
    ) => void
  ) => void;
}
