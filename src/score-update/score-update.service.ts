// score-update.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class ScoreUpdateService {
  constructor(@InjectQueue('score-update-queue') private readonly queue: Queue) {}

  async addJob(data: any) {
    await this.queue.add('score-update-job', data);
    console.log('Job added:', data);
  }
}
