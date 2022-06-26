import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';
import { INIT_ORDER } from '~processes/order/config/initOrder';

export const resetOrder = createEvent<IOrder>();

export function resetOrderEvent(state: IOrder) {
  state = INIT_ORDER;

  return state;
}
