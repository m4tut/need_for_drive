import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setColor = createEvent<string>();

export function setColorEvent(state: IOrder, payload: string) {
  state.color.value = payload;

  return state;
}
