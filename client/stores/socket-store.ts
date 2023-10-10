import { env } from "@/env.mjs";
import { io, Socket } from "socket.io-client";
import { create } from "zustand";

interface SocketState {
  socket: Socket | undefined;
  connect: () => void;
  disconnect: () => void;
}

export const useSocketStore = create<SocketState>()((set, get) => ({
  socket: undefined,
  connect: () => {
    const socket = io(env.NEXT_PUBLIC_API_DOMAIN, {
      path: env.NEXT_PUBLIC_API_SOCKET_PATH,
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
