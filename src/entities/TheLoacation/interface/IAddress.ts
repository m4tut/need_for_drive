import { IPointOfIssue } from './IPointOfIssue';

export interface IAddress {
  value: {
    ru: string;
    en: string;
  };
  address: IPointOfIssue[];
  coordinates: [number, number];
}
