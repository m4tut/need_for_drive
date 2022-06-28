import { ISelect } from '~shared/ui/AppSelect';

export interface IAddress extends ISelect {
  coordinates: [number, number];
}
