import { createStore, combine } from 'effector';

// Event
import { setAddress, setAddressEvent } from './events/setAddress';
import { setCity, setCityEvent } from './events/setCity';

// Functions
import { getLocation } from '../functons/getLocation';

const location = getLocation();

export const $storeCity = createStore<string>(location.city).on(setCity, (store, payload: string) =>
  setCityEvent(payload)
);

export const $storeAddress = createStore<string>(location.address).on(setAddress, (store, payload: string) =>
  setAddressEvent(payload)
);

export const $storeOrder = combine($storeCity, $storeAddress, (city, address) => {
  return `Hello, ${city}. Your balance is ${address}`;
});
