import { IRentalDuration } from './IDate';

type OrderItem<T> = {
  name: string;
  value: T;
  visible: boolean;
};

export interface IOrder {
  location: OrderItem<string>;
  model: OrderItem<string>;
  color: OrderItem<string>;
  rentalDuration: OrderItem<IRentalDuration>;
  rate: OrderItem<string>;
  tankFull: OrderItem<boolean>;
  babySeat: OrderItem<boolean>;
  rightHandDrive: OrderItem<boolean>;
}
