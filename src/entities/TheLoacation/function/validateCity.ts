import { dataFilter } from '~entities/TheLoacation/function/dataFilter';
import { ICity } from '../interface/ICity';

export function validateCity(citys: ICity[], value: string) {
  if (!value) {
    return 'selectCity';
  }

  const city = dataFilter(citys, 'text', value);

  if (!city.length) {
    return 'cityError';
  }

  if (city[0].text.toLowerCase() !== value.toLowerCase()) {
    return 'cityErrorСomplete';
  }

  return '';
}
