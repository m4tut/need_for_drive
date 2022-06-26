import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setModel = createEvent<string>();

export function setModelEvent(state: IOrder, payload: string) {
  state.model.value = payload;

  return state;
}
