import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HoroscopeService } from './horoscope.service';
import { CreateHoroscopeDto } from './dto/create-horoscope.dto';
import { UpdateHoroscopeDto } from './dto/update-horoscope.dto';

@Controller('horoscope')
export class HoroscopeController {
  constructor(private readonly horoscopeService: HoroscopeService) {}

  @Post()
  create(@Body() createHoroscopeDto: CreateHoroscopeDto) {
    return this.horoscopeService.create(createHoroscopeDto);
  }

  @Get()
  findAll() {
    return this.horoscopeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horoscopeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHoroscopeDto: UpdateHoroscopeDto) {
    return this.horoscopeService.update(+id, updateHoroscopeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horoscopeService.remove(+id);
  }
}
