import { corsMw } from "@/api/middlewares/cors.middleware";
import { loggerMw } from "@/api/middlewares/logger.middleware";
import { socketAuthMw } from "@/api/middlewares/socket-auth.middlewar";
import {
  uploadVideoMw,
  uploadImageMw,
} from "@/api/middlewares/upload.middleware";

export { corsMw, loggerMw, socketAuthMw, uploadImageMw, uploadVideoMw };
