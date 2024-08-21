// score-update.module.ts
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ScoreUpdateProcessor } from './score-update.processor';
import { ScoreUpdateService } from './score-update.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'score-update-queue',
      connection: {
        host: '<REDIS_HOST>',
        port: parseInt('<REDIS_PORT>'),
        maxRetriesPerRequest: null,
      },
    }),
  ],
  providers: [ScoreUpdateProcessor, ScoreUpdateService],
  exports: [ScoreUpdateService],
})
export class ScoreUpdateModule {}
