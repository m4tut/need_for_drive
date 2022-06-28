import { createStore, combine } from 'effector';

// Event
import { setAddress, setAddressEvent } from './events/setAddress';
import { setCity, setCityEvent } from './events/setCity';
import { setOrderStep, setOrderStepEvent } from './events/setOrderStep';

// Functions
import { getLocation } from '../functons/getLocation';

// Controller
import { orderController } from './controller/orderController';

// Types
import { OrderStep } from '../type/OrderStep';

const location = getLocation();

export const $storeOrderStep = createStore<OrderStep>('location').on(setOrderStep, (store, payload: OrderStep) =>
  setOrderStepEvent(payload)
);

export const $storeCity = createStore<string>(location.city).on(setCity, (store, payload: string) =>
  setCityEvent(payload)
);

export const $storeAddress = createStore<string>(location.address).on(setAddress, (store, payload: string) =>
  setAddressEvent(payload)
);

export const $storeOrderLocation = combine($storeCity, $storeAddress, (city, address) => {
  return { city, address };
});

export const $storeOrder = combine($storeOrderStep, $storeOrderLocation, (orderStep, orderLocation) => {
  return orderController(orderStep, orderLocation);
});
