import { IAddres } from './IAddres';
import { ISelect } from '~shared/ui/AppSelect';

export interface ICity extends ISelect {
  address: IAddres[];
  coordinates: [number, number];
}
