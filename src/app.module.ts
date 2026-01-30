import { Module } from '@nestjs/common';
import { RedisModule } from './database/redis/redis.module';

@Module({
  imports: [RedisModule],
})
export class AppModule {}
