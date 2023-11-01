import { RequestHandler, Router } from "express";
import { metadataSchema } from "../../middlewares/upload.middleware";
import { uploadImageMw, uploadVideoMw } from "@/api/middlewares";
import { contentService } from "./contents.service";

class ContentController {
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
        const content = await contentService.create({
          type: "image",
          key: reqFile.key,
          name: reqFile.originalname,
          url: reqFile.location,
          hash: reqFileMetadata["file-hash"],
          size: reqFile.size,
        });
        res.status(201).send(content);
      } catch (err) {
        res.status(500).send(err);
      }
    };
  }

  createVideo(): RequestHandler {
    return async (req, res) => {
      const content = await contentService.create(req.body);
      res.send(content);
    };
  }
}

export const contentController = new ContentController();
