import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';
import { IRentalDuration } from './../../interface/IDate';

export const setRentalDuration = createEvent<IRentalDuration>();

export function setRentalDurationEvent(state: IOrder, payload: IRentalDuration) {
  state.rentalDuration.value = payload;

  return state;
}
