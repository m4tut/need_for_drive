import { createEvent } from 'effector';

// Types
import { OrderStep } from '~processes/order/type/OrderStep';

export const setOrderStep = createEvent<OrderStep>();

export function setOrderStepEvent(payload: OrderStep): OrderStep {
  return payload;
}
