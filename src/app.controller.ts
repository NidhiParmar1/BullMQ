import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ScoreUpdateService } from './score-update/score-update.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly scoreUpdateService: ScoreUpdateService) {}
    
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('update-score')
  async updateScore() {
    await this.scoreUpdateService.addJob({ score: 100 });
    return 'Score update job added to the queue';
  }
}
