import { Socket } from "socket.io";
import { io } from "..";

type TUserStatus = "online" | "offline";

const users: {
  [key: string]: {
    status: TUserStatus;
    sockets: string[];
  };
} = {};

export const usersHandler = (socket: Socket) => {
  const handshake = socket.handshake;
  console.log({ socketId: socket.id });

  // socket.join(`users:user:${handshake.auth.user.userId}:events`);

  socket.on("disconnect", () => {
    console.log("usersHandler disconnect:", socket.id);
  });

  socket.on("users:status", (payload: { user: any }) => {
    socket.join(`users:user:${payload.user}:status`);
  });
  socket.on(
    "users:send_event",
    (payload: {
      userId: string;
      eventType: "notification" | "message";
      eventPayload: { notification: any; message: any };
    }) => {
      if (payload.eventType === "message") socket.emit("");
    }
  );
  socket.on("users:send_status", () => {
    socket.emit("");
  });

  socket.on("users:get_status", (payload: { ids: string[] }, cb) => {
    const offline: string[] = [];
    const online: string[] = [];

    payload.ids.forEach((id) => {
      if (users[id].status == "online") online.push(id);
    });

    cb({
      offline,
      online,
    });
  });

  /**
   * Testing
   */
  socket.on("join_messages", () => {
    socket.join("messages");
  });
  socket.on("messages", (payload: string) => {
    socket.emit("messages", payload);
  });
};
