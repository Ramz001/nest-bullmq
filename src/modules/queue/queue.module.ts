import { Module } from '@nestjs/common';
import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'console-queue',
    }),
    BullBoardModule.forFeature({
      name: 'console-queue',
      adapter: BullMQAdapter,
    }),
  ],
  controllers: [QueueController],
  providers: [QueueService],
})
export class QueueModule {}
