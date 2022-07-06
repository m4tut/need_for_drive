import { IAddress } from '../interface/IAddress';
import { IPointOfIssue } from '../interface/IPointOfIssue';

export function dataFilter<T extends IAddress | IPointOfIssue>(data: T[], str: string): T[] {
  return data.filter(
    (item) =>
      item.value['ru'].toLowerCase().includes(str.toLowerCase()) ||
      item.value['en'].toLowerCase().includes(str.toLowerCase())
  );
}
