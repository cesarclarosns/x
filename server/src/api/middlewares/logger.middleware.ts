import pino from "pino";
import { pinoHttp } from "pino-http";
import { v4 } from "uuid";
import { logger } from "@/libs/logger";

export const loggerMw = () =>
  pinoHttp({
    logger: logger,

    // transport: { target: "pino-pretty" },

    wrapSerializers: true,

    genReqId: (req, res) => {
      const existingID = req.id ?? req.headers["x-request-id"];
      if (existingID) return existingID;
      const id = v4();
      res.setHeader("X-Request-Id", id);
      return id;
    },

    serializers: {
      err: pino.stdSerializers.err,
      req: pino.stdSerializers.req,
      res: pino.stdSerializers.res,
    },
  });
