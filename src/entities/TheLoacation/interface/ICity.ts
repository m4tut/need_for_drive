import { IPointOfIssue } from './IPointOfIssue';
import { ISelect } from '~shared/ui/AppSelect';

export interface ICity extends ISelect {
  pointOfIssue: IPointOfIssue[];
  coordinates: [number, number];
}
