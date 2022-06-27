import { cityFilter } from '~entities/TheLoacation/function/cityFilter';
import { ICity } from './../interface/ICity';

export function validateCity(citys: ICity[], value: string) {
  if (!value) {
    return 'Выберете город';
  }

  const city = cityFilter(citys, 'text', value);

  if (!city.length) {
    return 'Фелиалы в выбраонном городе отсутствют';
  }

  if (city[0].text.toLowerCase() !== value.toLowerCase()) {
    return 'Введите название города полностью';
  }

  return '';
}
