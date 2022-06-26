type OrderItem<T> = {
  name: string;
  value: T;
  visible: boolean;
};

type TheDate = {
  dateStart: Date | undefined;
  dateEnd: Date | undefined;
};

export interface IOrder {
  pointOfIssue: OrderItem<string>;
  model: OrderItem<string>;
  color: OrderItem<string>;
  rentalDuration: OrderItem<TheDate>;
  rate: OrderItem<string>;
  tankFull: OrderItem<boolean>;
  babySeat: OrderItem<boolean>;
  rightHandDrive: OrderItem<boolean>;
}
