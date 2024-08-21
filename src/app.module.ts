// app.module.ts
import { Module } from '@nestjs/common';
import { ScoreUpdateModule } from './score-update/score-update.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ScoreUpdateModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
