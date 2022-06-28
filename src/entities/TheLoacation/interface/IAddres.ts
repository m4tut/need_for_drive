import { ISelect } from '~shared/ui/AppSelect';

export interface IAddres extends ISelect {
  coordinates: [number, number];
}
