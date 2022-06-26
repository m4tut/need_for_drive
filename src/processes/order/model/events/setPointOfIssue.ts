import { createEvent } from 'effector';
import { ILocation } from '~processes/order/interface/ILoacation';
import { IOrder } from '~processes/order/interface/IOrder';

export const setPointOfIssue = createEvent<ILocation>();

export function setPointOfIssueEvent(state: IOrder, payload: ILocation) {
  localStorage.setItem('location', JSON.stringify(payload));
  state.pointOfIssue.value = `${payload.city}, ${payload.address}`;

  return state;
}
