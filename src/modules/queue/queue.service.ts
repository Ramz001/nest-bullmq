// queue.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('console-queue') private readonly queue: Queue) {}

  async addJob(message: string) {
    return this.queue.add('log-job', { message });
  }
}
