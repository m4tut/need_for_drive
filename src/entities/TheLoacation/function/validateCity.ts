import { dataFilter } from '~entities/TheLoacation/function/dataFilter';
import { Langs } from '~processes/lang/type/langs';
import { IAddress } from '../interface/IAddress';

export function validateCity(citys: IAddress[], value: string, locale: Langs) {
  if (!value) {
    return 'selectCity';
  }

  const city = dataFilter(citys, value);

  if (!city.length) {
    return 'cityError';
  }

  if (city[0].value[locale].toLowerCase() !== value.toLowerCase()) {
    return 'cityErrorСomplete';
  }

  return '';
}
