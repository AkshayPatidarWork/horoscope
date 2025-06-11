import { Injectable } from '@nestjs/common';
import { CreateHoroscopeDto } from './dto/create-horoscope.dto';
import { UpdateHoroscopeDto } from './dto/update-horoscope.dto';

@Injectable()
export class HoroscopeService {
  create(createHoroscopeDto: CreateHoroscopeDto) {
    return 'This action adds a new horoscope';
  }

  findAll() {
    return `This action returns all horoscope`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horoscope`;
  }

  update(id: number, updateHoroscopeDto: UpdateHoroscopeDto) {
    return `This action updates a #${id} horoscope`;
  }

  remove(id: number) {
    return `This action removes a #${id} horoscope`;
  }
}
