import { env } from "@/env.mjs";
import { io, Socket } from "socket.io-client";
import { create } from "zustand";

interface ChatsState {}

export const useChatStore = create<ChatsState>()((set, get) => ({}));
