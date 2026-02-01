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
          host: process.env.REDIS_HOST || '',
          port: Number(process.env.REDIS_PORT) || 6379,
          password: process.env.REDIS_PASSWORD || undefined,
          enableReadyCheck: true,
        });
      },
    },
    RedisService,
  ],
  exports: [RedisService],
})
export class RedisModule {}
