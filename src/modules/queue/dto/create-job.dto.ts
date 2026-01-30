import z from 'zod';

export const CreateJobDto = z.object({
  message: z.string().min(1).max(255),
});

export type CreateJobType = z.infer<typeof CreateJobDto>;
