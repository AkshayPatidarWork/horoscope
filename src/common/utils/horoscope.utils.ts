import * as horoscopeData from '../data/horoscope.mock.json';

export function getMockHoroscope(sign: string, date: string): string {
  const messages = horoscopeData[sign.toLowerCase()];
  if (!messages?.length) return 'No horoscope available.';

  const day = new Date(date).getDate();
  const index = day % messages.length;

  return messages[index];
}
