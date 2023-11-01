import {
  S3Client,
  HeadObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

import { config } from "../../../config/config";
import { Content, TContent } from "../../../db/models/content.model";

class ContentService {
  client = new S3Client({
    region: "us-east-2",
    credentials: {
      accessKeyId: config.AWS_ACCESS_KEY_ID,
      secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
    },
  });

  constructor() {}

  async create(create: Partial<TContent>) {
    const content = await Content.create(create);
    return content;
  }

  async getSignedUrl() {}
}

export const contentService = new ContentService();
