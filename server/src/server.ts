import dotenv from "dotenv";

if (process.env.NODE_ENV === "dev") {
  dotenv.config();
}

import { connectDB } from "./db";
import { connectRedis } from "./cache";
import { httpServer } from "./api";
import { config } from "./config/config";
import { LastReadMessagePerUser } from "./db/models/last-read-message-per-user.model";

(async () => {
  await connectDB();
  // await connectRedis();
  httpServer.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`);
  });
})();
