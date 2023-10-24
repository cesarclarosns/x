import { RequestHandler, Router } from "express";
import { metadataSchema } from "../middlewares/upload.middleware";
import { uploadImageMw, uploadVideoMw } from "@/api/middlewares";
import { fileService } from "./file.service";

class FileController {
  router = Router();

  constructor() {
    this.router.post(
      "/image",
      uploadImageMw.single("file"),
      this.createImage()
    );
    this.router.post(
      "/video",
      uploadVideoMw.single("file"),
      this.createVideo()
    );
  }

  createImage(): RequestHandler {
    return async (req, res) => {
      try {
        const reqFile = req.file as Express.MulterS3.File;
        const reqFileMetadata = metadataSchema.parse(reqFile.metadata);
        const file = await fileService.create({
          type: "image",
          key: reqFile.key,
          name: reqFile.originalname,
          url: reqFile.location,
          hash: reqFileMetadata["file-hash"],
          size: reqFile.size,
        });
        res.status(201).send(file);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  createVideo(): RequestHandler {
    return async (req, res) => {
      const file = await fileService.create(req.body);
      res.send(file);
    };
  }
}

export const fileController = new FileController();
