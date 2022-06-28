import { ISelect } from '~shared/ui/AppSelect';
import { ICity } from '../interface/ICity';

export function dataFilter<T extends ISelect | ICity>(data: T[], key: keyof ISelect, str: string): T[] {
  return data.filter((item) => item[key].toLowerCase().includes(str.toLowerCase()));
}
