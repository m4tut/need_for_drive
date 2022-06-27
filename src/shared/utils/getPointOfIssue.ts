import { IOrder } from '../../processes/order/interface/IOrder';

export function getPointOfIssue({ pointOfIssue }: IOrder): string {
  return pointOfIssue.value.split(', ')[1];
}
