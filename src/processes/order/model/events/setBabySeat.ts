import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setBabySeat = createEvent<boolean>();

export function setBabySeatEvent(state: IOrder, payload: boolean) {
  state.babySeat.value = payload;

  return state;
}
