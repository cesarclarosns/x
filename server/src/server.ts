import "module-alias/register";

import { connectDB } from "@/db";
import { connectRedis } from "@/cache";
import { httpServer } from "@/api";
import { config } from "@/config/config";

(async () => {
  await connectDB();
  // await connectRedis();
  httpServer.listen(config.PORT, () => {
    console.log(`Server is running on port: ${config.PORT}`);
  });
})();
