import { ICity } from '../interface/ICity';

export function cityFilter(city: ICity[], key: 'text' | 'value', str: string) {
  return city.filter((item) => item[key].toLowerCase().includes(str.toLowerCase()));
}
