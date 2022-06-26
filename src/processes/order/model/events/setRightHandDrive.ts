import { createEvent } from 'effector';
import { IOrder } from '~processes/order/interface/IOrder';

export const setRightHandDrive = createEvent<boolean>();

export function setRightHandDriveEvent(state: IOrder, payload: boolean) {
  state.rightHandDrive.value = payload;

  return state;
}
