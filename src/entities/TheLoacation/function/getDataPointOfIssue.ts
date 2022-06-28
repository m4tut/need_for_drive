import { dataFilter } from './dataFilter';
import { CITYS } from './../config/citys';
import { IPointOfIssue } from './../interface/IPointOfIssue';

export function getDataPointOfIssue(): IPointOfIssue[] {
  const storage = localStorage.getItem('location');
  const storageParse = storage ? JSON.parse(storage) : '';

  if (!storageParse.city) {
    return [];
  }

  const filteredData = dataFilter(CITYS, 'text', storageParse.city);

  if (filteredData.length < 1) {
    return [];
  }

  return filteredData[0].pointOfIssue;
}
