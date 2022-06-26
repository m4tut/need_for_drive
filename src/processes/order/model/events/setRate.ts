import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setRate = createEvent<string>();

export function setRateEvent(state: IOrder, payload: string) {
  state.rate.value = payload;

  return state;
}
