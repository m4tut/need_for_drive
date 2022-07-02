import { CITYS } from '../../../processes/order/config/citys';
import { dataFilter } from '~entities/TheLoacation/function/dataFilter';

export function getCoordinates(city: string, address: string): [number, number] {
  const cityFiltered = dataFilter(CITYS, 'text', city);

  if (!cityFiltered.length) {
    return [54.314192, 48.403132];
  }

  const addressFiltered = dataFilter(cityFiltered[0].address, 'text', address);

  if (!addressFiltered.length) {
    return cityFiltered[0].coordinates;
  }

  return addressFiltered[0].coordinates;
}
