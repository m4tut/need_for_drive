import { ISelect } from '~shared/ui/AppSelect';
import { IAddress } from './IAddress';

export interface ICity extends ISelect {
  address: IAddress[];
  coordinates: [number, number];
}
