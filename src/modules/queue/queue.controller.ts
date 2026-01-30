import { Controller, Post, Body } from '@nestjs/common';
import { QueueService } from './queue.service';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { CreateJobDto, type CreateJobType } from './dto/create-job.dto';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('add-job')
  async addJob(@Body(new ZodValidationPipe(CreateJobDto)) body: CreateJobType) {
    const job = await this.queueService.addJob(body.message);
    return { jobId: job.id, status: 'added' };
  }
}
