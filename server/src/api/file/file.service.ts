import { S3Client } from "@aws-sdk/client-s3";

class FileService {
  client = new S3Client({});

  constructor() {}

  async generateSignedUrl(url: string): Promise<string> {
    return "";
  }
}

export const fileService = new FileService();
