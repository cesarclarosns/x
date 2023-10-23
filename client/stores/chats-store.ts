import { env } from "@/env.mjs";
import { io, Socket } from "socket.io-client";
import { create } from "zustand";

interface ChatsState {
  chat: Socket | undefined;
  connect: ({ accessToken }: { accessToken: string }) => void;
  disconnect: () => void;
}

export const useSocketStore = create<ChatsState>()((set, get) => ({
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
}));
