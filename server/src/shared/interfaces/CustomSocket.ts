import { Socket } from "socket.io";
import {
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketData,
} from "@/shared/interfaces";

export default interface ICustomSocket
  extends Socket<
    IClientToServerEvents,
    IServerToClientEvents,
    IInterServerEvents,
    ISocketData
  > {}
