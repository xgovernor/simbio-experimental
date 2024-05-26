import redis from "redis";

export const redisClient = redis.createClient({
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  password: process.env.UPSTASH_REDIS_REST_TOKEN as string,
  username: "",
});
