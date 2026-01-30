// queue.processor.ts
import { Processor } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('console-queue') // queue name
export class QueueProcessor {
  // This is the only method you need — called automatically for each job
  process(job: Job) {
    console.log(`Processing job ${job.id}:`, job.data);

    // Optional: you can return data
    return { done: true };
  }
}
