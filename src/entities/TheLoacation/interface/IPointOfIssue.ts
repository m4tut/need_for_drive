import { ISelect } from '~shared/ui/AppSelect';

export interface IPointOfIssue extends ISelect {
  coordinates: [number, number];
}
