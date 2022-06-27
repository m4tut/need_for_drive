import { IOrder } from '../../processes/order/interface/IOrder';

export function getCity({ pointOfIssue }: IOrder): string {
  return pointOfIssue.value.split(', ')[0];
}
