import multer from "multer";
import multerS3 from "multer-s3";
import { fileService } from "../file/file.service";

export const upload = multer({
  storage: multerS3({
    s3: fileService.client,
    bucket: "",
    metadata: (req, file, callback) => {},
    key: (req, file, cb) => {},
  }),
});
