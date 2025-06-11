import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { HoroscopeService } from './horoscope.service';
import { HoroscopeController } from './horoscope.controller';
import { HoroscopeHistory } from '@horoscope/nest/models';

@Module({
  imports: [SequelizeModule.forFeature([HoroscopeHistory])],
  controllers: [HoroscopeController],
  providers: [HoroscopeService],
  exports: [HoroscopeService],
})
export class HoroscopeModule {}
