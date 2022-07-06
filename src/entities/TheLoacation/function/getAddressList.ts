// Functions
import { dataFilter } from './dataFilter';

// Config
import { CITYS } from '~processes/order/config/citys';

// Interface
import { IPointOfIssue } from '../interface/IPointOfIssue';

export function getAddressList(): IPointOfIssue[] {
  const storage = localStorage.getItem('location');
  const storageParse = storage ? JSON.parse(storage) : '';

  if (!storageParse.city) {
    return [];
  }

  const filteredData = dataFilter(CITYS, storageParse.city);

  if (!filteredData) {
    return [];
  }

  return filteredData[0].address;
}
