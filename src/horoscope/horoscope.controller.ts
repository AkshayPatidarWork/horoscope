import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { HoroscopeService } from './horoscope.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
@ApiTags('dashboard')
@ApiBearerAuth('token')
@Controller('horoscope')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}
  @UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 5, ttl: 6000 } })
  @Get('today')
  getToday(@Req() req) {
    return this.horoscopeService.getToday(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  getHistory(@Req() req) {
    return this.horoscopeService.getHistory(req.user);
  }
}
