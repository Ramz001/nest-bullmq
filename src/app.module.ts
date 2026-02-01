import { Module } from '@nestjs/common';
import { RedisModule } from './database/redis/redis.module';
import { BullModule } from '@nestjs/bullmq';
import { QueueModule } from './modules/queue/queue.module';
import { ConfigModule } from '@nestjs/config';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes process.env available everywhere
    }),
    RedisModule,
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BullBoardModule.forRoot({
      route: '/queues',
      adapter: ExpressAdapter,
    }),
    QueueModule,
  ],
})
export class AppModule {}
