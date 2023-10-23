import {
  S3Client,
  HeadObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

import { config } from "../../config/config";
import { File, TFile } from "../../db/models/file.model";

class FileService {
  client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
  });

  constructor() {}

  async create(create: Partial<TFile>) {
    const file = await File.create(create);
    return file;
  }

  async getSignedUrl() {}
}

export const fileService = new FileService();
