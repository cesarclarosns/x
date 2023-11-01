import multer from "multer";
import multerS3 from "multer-s3";
import { contentService } from "../features/content/contents.service";
import { v4 } from "uuid";
import { z } from "zod";
import { Request } from "express";

export const metadataSchema = z.object({
  "file-hash": z.string(),
  "watermark-text": z.string(),
});

export const uploadImageMw = multer({
  storage: multerS3({
    s3: contentService.client,
    bucket: "cesarclarosns-test",
    key: (req, file, callback) => {
      try {
        let key = `/uploads/${v4()}/${encodeURIComponent(file.originalname)}`;
        callback(null, key);
      } catch (err) {
        callback(err);
      }
    },
    metadata(req, file, callback) {
      try {
        const reqBody = (req as Request).body;
        const parsedReqBody = JSON.parse(JSON.stringify(reqBody));
        const metadata = metadataSchema.parse(parsedReqBody);
        callback(null, metadata);
      } catch (err) {
        callback(err);
      }
    },
    serverSideEncryption: "AES256",
  }),
});

export const uploadVideoMw = multer({
  storage: multerS3({
    s3: contentService.client,
    bucket: "cesarclarosns-test",
    key: (req, file, callback) => {
      try {
        let key = `/uploads/${v4()}/${encodeURIComponent(file.originalname)}`;
        callback(null, key);
      } catch (err) {
        callback(err);
      }
    },
    serverSideEncryption: "AES256",
  }),
});
