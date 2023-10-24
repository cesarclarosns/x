import { env } from "@/env.mjs";
import { io, Socket } from "socket.io-client";
import { create } from "zustand";
import { Subject } from "rxjs";
import IDefaultCallbackResponse from "@/shared/interfaces/models/default-callback-response.interface";

interface IClientToServerEvents {
  "chats/chat/join-chat": (
    ev: { chatId: string },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/leave-chat": (
    ev: { chatId: string },
    cb: (err: any, res?: IDefaultCallbackResponse) => void
  ) => void;

  "chats/chat/new-message": () => void;
  "chats/chat/user-typing": () => void;
  "users/get-status": () => void;
  "users/update-status": (ev: any, cb: (err: any, res: any) => void) => void;
}

interface IServerToClientEvents {
  "chats/new-message": () => void;
  "chats/chat/new-message": () => void;
  "chats/chat/user-typing": () => void;
}

interface ICustomSocket
  extends Socket<IServerToClientEvents, IClientToServerEvents> {}

interface ISocketState {
  socket: ICustomSocket | undefined;
  connect: ({ accessToken }: { accessToken: string }) => void;
  disconnect: () => void;
  $connect: Subject<void>;
  $disconnect: Subject<void>;
}

export const useSocketStore = create<ISocketState>()((set, get) => ({
  socket: undefined,
  connect: ({ accessToken }) => {
    const socket = io(env.NEXT_PUBLIC_API_DOMAIN, {
      path: env.NEXT_PUBLIC_API_SOCKET_PATH,
      auth: { accessToken },
    });
    set({ socket });
  },
  disconnect: () => {
    const { socket } = get();
    if (socket) {
      socket.disconnect();
      set({ socket: undefined });
    }
  },
  $connect: new Subject(),
  $disconnect: new Subject(),
}));
