/* eslint-disable react-hooks/exhaustive-deps */
import { useSocketStore } from "@/stores/socket-store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Subscription } from "rxjs";
import { z } from "zod";

const paramsSchema = z
  .object({
    chatId: z.string(),
  })
  .passthrough();

const useInitChat = () => {
  const params = useParams();
  const { socket, $connect, $disconnect } = useSocketStore();

  const joinChat = (chatId: string) => {
    if (!socket) return;

    socket.emit(
      "chats/chat/join-chat",
      {
        chatId,
      },
      (err, res) => {
        console.log({ err, res });
      }
    );
  };

  useEffect(() => {
    let parsedParams = paramsSchema.safeParse(params);
    // console.log({ parsedParams, socket });
    if (!parsedParams.success) return;

    let chatId = parsedParams.data.chatId;

    let subscription = new Subscription();

    subscription.add(
      $connect.subscribe(() => {
        console.log("$connect ChatPage");
        joinChat(chatId);
      })
    );
    subscription.add(
      $disconnect.subscribe(() => {
        console.log("$disconnect ChatPage");
      })
    );

    if (socket) {
      joinChat(chatId);
    }

    return () => {
      console.log("Unsubscribing...");
      // Unsubscribe from subjects
      subscription.unsubscribe();

      // Leave chat
      if (socket) {
        socket.emit("chats/chat/leave-chat", { chatId }, (err, res) => {
          console.log({ err, res });
        });
        socket.off("chats/chat/new-message");
      }
    };
  }, [socket, params]);

  return {};
};

export default useInitChat;
