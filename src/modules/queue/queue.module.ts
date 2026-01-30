import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'console-queue', // your queue
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule {}
