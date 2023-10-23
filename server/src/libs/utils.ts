import crypto from "crypto";

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getFileExtension(filename: string) {
  return filename.split(".").at(-1);
}

export const getHash = (buffer: Buffer) => {
  const hashSum = crypto.createHash("sha256");
  hashSum.update(buffer);
  const hex = hashSum.digest("hex");
  return hex;
};
