// score-update.processor.ts
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('score-update-queue')
export class ScoreUpdateProcessor extends WorkerHost {
  async process(job: Job<any>): Promise<void> {
    console.log('Processing job:', job.id, job.data);
    //NOTE: implement the job processing function here
  }
}
