import { Socket } from "socket.io";
import { ExtendedError } from "socket.io/dist/namespace";
import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken";
import { config } from "../../config/config";
import { ITokenPayload } from "../../shared/interfaces/token-payload.interface";
import ICustomSocket from "@/shared/interfaces/custom-socket";

export const socketAuthMw =
  () => (socket: ICustomSocket, next: (err?: ExtendedError) => void) => {
    try {
      const auth = socket.handshake.auth;

      const payload = jsonwebtoken.verify(
        auth!.accessToken,
        config.ACCESS_TOKEN_SECRET
      ) as ITokenPayload;

      socket.data = payload;

      next();
    } catch (err) {
      if (err instanceof JsonWebTokenError) {
        console.log({ message: err.message });
        const error = new Error("Unauthorized");
        next(error);
      } else {
        next(new Error(err?.toString()));
      }
    }
  };
