import { dataFilter } from './dataFilter';
import { CITYS } from '../config/citys';
import { IAddres } from '../interface/IAddres';

export function getAddressList(): IAddres[] {
  const storage = localStorage.getItem('location');
  const storageParse = storage ? JSON.parse(storage) : '';

  if (!storageParse.city) {
    return [];
  }

  const filteredData = dataFilter(CITYS, 'text', storageParse.city);

  if (filteredData.length < 1) {
    return [];
  }

  return filteredData[0].address;
}
