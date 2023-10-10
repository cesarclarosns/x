import { createClient } from "redis";

export const redisClient = createClient({});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

export const connectRedis = async () => {
  await redisClient.connect();
  console.log("Connected to Redis");
};
