import { z } from "zod";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "dev") {
  dotenv.config();
}

const configSchema = z.object({
  PORT: z.number(),
  // AUTH
  ACCESS_TOKEN_SECRET: z.string().min(1),
  ACCESS_TOKEN_EXPIRES_IN: z.number(),
  REFRESH_TOKEN_SECRET: z.string().min(1),
  REFRESH_TOKEN_EXPIRES_IN: z.number(),
  PASSWORD_SALT: z.string(),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CALLBACK_URL: z.string().url(),
  // AWS
  AWS_SECRET_ACCESS_KEY: z.string().min(1),
  AWS_ACCESS_KEY_ID: z.string().min(1),
});

export const config: z.infer<typeof configSchema> = {
  PORT: Number(process.env.PORT!),
  // AUTH
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
  ACCESS_TOKEN_EXPIRES_IN: Number(process.env.ACCESS_TOKEN_EXPIRES_IN!),
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET!,
  REFRESH_TOKEN_EXPIRES_IN: Number(process.env.REFRESH_TOKEN_EXPIRES_IN!),
  PASSWORD_SALT: process.env.PASSWORD_SALT!,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL!,
  // AWS
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID!,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY!,
};

configSchema.parse(config);
