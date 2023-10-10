import { Socket } from "socket.io";

export const roomsHandler = (socket: Socket) => {
  socket.on("rooms:join", (payload: any) => {
    console.log({ payload });
    const { room, _id } = payload;
    socket.join(room);
  });

  socket.on("rooms:leave", (payload: any) => {
    console.log({ payload });
    const { room, _id } = payload;
    socket.leave(room);
  });
};
