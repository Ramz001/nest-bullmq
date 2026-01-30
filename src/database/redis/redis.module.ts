import { Global, Module } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';
import { RedisService } from './redis.service';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: () => {
        return new Redis({
          host: process.env.REDIS_HOST || '127.0.0.1',
          port: Number(process.env.REDIS_PORT) || 6379,
          password: process.env.REDIS_PASSWORD || undefined,
          maxRetriesPerRequest: null,
          enableReadyCheck: true,
          retryStrategy: (times) => Math.min(times * 50, 2000),
          reconnectOnError: (err) =>
            ['READONLY', 'ECONNRESET'].some((e) => err.message.includes(e)),
        });
      },
    },
    RedisService, // ✅ THIS WAS MISSING
  ],
  exports: [
    RedisService, // ✅ EXPORT IT
  ],
})
export class RedisModule {}
