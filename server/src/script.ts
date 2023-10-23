import bcrypt from "bcrypt";
import { fileService } from "./api/file/file.service";
import { PutObjectCommand } from "@aws-sdk/client-s3";

import crypto from "crypto";
import fs from "fs";

const files = ["30mb.jpg", "10mb.jpg", "10mb.jpg", "30mb.jpg", "30mb.jpg"];

const getHash = (buffer: Buffer) => {
  const hashSum = crypto.createHash("sha256");
  hashSum.update(buffer);
  const hex = hashSum.digest("hex");
  return hex;
};
