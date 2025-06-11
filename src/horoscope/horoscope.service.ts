import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { getMockHoroscope } from '../common/utils/horoscope.utils';
import { InjectModel } from '@nestjs/sequelize';
import dayjs from 'dayjs';
import { HoroscopeHistory } from '@horoscope/nest/models';
import { Op } from 'sequelize';

@Injectable()
export class HoroscopeService {
  constructor(
    @InjectModel(HoroscopeHistory)
    private horoscopeModel: typeof HoroscopeHistory,
  ) {}

  async getToday(user: any) {
    const { id: userId, zodiacSign } = user;
    const today = dayjs().format('YYYY-MM-DD');

    try {
      let entry = await this.horoscopeModel.findOne({
        where: { userId, date: today },
      });

      if (!entry) {
        const description = getMockHoroscope(zodiacSign, today);

        entry = await this.horoscopeModel.create({
          userId,
          date: today,
          description: description,
        });
      }

      return {
        date: entry.date,
        zodiac: zodiacSign,
        horoscope: entry.description,
      };
    } catch (error) {
      console.error(' Error fetching horoscope:', error);
      throw new InternalServerErrorException('Could not retrieve horoscope.');
    }
  }

  async getHistory(user: any) {
    try {
      const today = dayjs();
      const weekAgo = today.subtract(6, 'day').format('YYYY-MM-DD');

      const entries = await this.horoscopeModel.findAll({
        where: {
          userId: user.id,
          date: {
            [Op.gte]: weekAgo,
          },
        },
        order: [['date', 'DESC']],
      });

      return entries.map((entry) => ({
        date: entry.date,
        zodiac: user.zodiacSign,
        horoscope: entry.description,
      }));
    } catch (error) {
      console.error(' Error fetching horoscope history:', error);
      throw new InternalServerErrorException(
        'Could not retrieve horoscope history.',
      );
    }
  }
}
