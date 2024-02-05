import { Controller, Get, HttpStatus, Query, Res, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { KeywordsService } from './keywords.service';
import { Response } from 'express';

@ApiTags('키워드 API')
@Controller('api/keywords')
export class KeywordsController {
    constructor(private readonly catsService: KeywordsService) {}

    @Get('/mood')
    @ApiOperation({ summary: 'Get Mood Keywords API', description: '무드 태그 리스트를 받을 수 있습니다.' })
    @ApiCreatedResponse({ description: '무드 키워드 리스트 조회 완료.' })
    @UseGuards()
    async getMoodKeywords(@Query() roomId: string) {
        const moodKeywords = [
            { id: 1, name: '행복' },
            { id: 2, name: '슬픔' },
            { id: 3, name: '평온' },
            { id: 4, name: '분노' },
            { id: 5, name: '불안' },
            { id: 6, name: '기쁨' },
            { id: 7, name: '우울' },
            { id: 8, name: '불안' },
            { id: 9, name: '사랑' },
            { id: 10, name: '즐거움' },
            { id: 11, name: '행복' },
            { id: 12, name: '슬픔' },
            { id: 13, name: '평온' },
            { id: 14, name: '분노' },
            { id: 15, name: '불안' },
            { id: 16, name: '기쁨' },
            { id: 17, name: '우울' },
            { id: 18, name: '불안' },
            { id: 19, name: '사랑' },
            { id: 20, name: '즐거움' },
        ]
        return moodKeywords;
    }
}