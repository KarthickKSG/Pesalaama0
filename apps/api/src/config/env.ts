import { z } from 'zod';
const schema = z.object({
  NODE_ENV: z.enum(['development','production','test']).default('development'),
  PORT: z.string().default('4000'),
  DATABASE_URL: z.string(),
  REDIS_URL: z.string(),
  JWT_SECRET: z.string(),
  JWT_REFRESH_SECRET: z.string(),
  S3_ENDPOINT: z.string().optional(),
  S3_BUCKET: z.string().default('uploads')
});
export const env = schema.parse(process.env);
