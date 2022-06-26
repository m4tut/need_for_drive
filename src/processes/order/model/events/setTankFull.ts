import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setTankFull = createEvent<boolean>();

export function setTankFullEvent(state: IOrder, payload: boolean) {
  state.tankFull.value = payload;

  return state;
}
