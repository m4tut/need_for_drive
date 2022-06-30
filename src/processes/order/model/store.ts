import { createStore, combine } from 'effector';

// Events
import { setAddress, setAddressEvent } from './events/setAddress';
import { setCity, setCityEvent } from './events/setCity';
import { setOrderStep, setOrderStepEvent } from './events/setOrderStep';
import { setModel, setModelEvent } from './events/setModel';
import { setPrice, setPriceEvent } from './events/setPrice';
import { setColor, setColorEvent } from './events/setColor';

// Functions
import { getLocation } from '../functons/getLocation';
import { getModel } from '../functons/getModel';

// Controller
import { orderController } from './controller/orderController';

// Types
import { OrderStep } from '../type/OrderStep';

const location = getLocation();

export const $storeOrderStep = createStore<OrderStep>('location').on(setOrderStep, (store, payload: OrderStep) =>
  setOrderStepEvent(payload)
);

export const $storePrice = createStore<number | [number, number]>([12000, 32000]).on(
  setPrice,
  (store, payload: number | [number, number]) => setPriceEvent(payload)
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

export const $storeModel = createStore<string>(getModel()).on(setModel, (store, payload: string) =>
  setModelEvent(payload)
);

export const $storeColor = createStore<string>('Любой').on(setColor, (store, payload: string) =>
  setColorEvent(payload)
);

export const $storeOrder = combine(
  $storeOrderStep,
  $storeOrderLocation,
  $storeModel,
  $storeColor,
  (orderStep, orderLocation, orderModel, orderColor) => {
    return orderController(orderStep, orderLocation, orderModel, orderColor);
  }
);
