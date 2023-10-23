import { z } from "zod";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "dev") {
  dotenv.config();
}

const dbConfigSchema = z.object({
  DB_CONNECTION_URI: z.string(),
});

export const dbConfig: z.infer<typeof dbConfigSchema> = {
  DB_CONNECTION_URI: process.env.DB_CONNECTION_URI!,
};

dbConfigSchema.parse(dbConfig);
