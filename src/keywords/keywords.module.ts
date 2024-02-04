import { Module } from '@nestjs/common';
import { KeywordsController } from './keywords.controller';
import { KeywordsService } from './keywords.service';

@Module({
  controllers: [KeywordsController],
  providers: [KeywordsService]
})
export class KeywordsModule {}
