import { createStore } from 'effector';

// Event
import { setAddress, setAddressEvent } from './events/setAddress';
import { setCity, setCityEvent } from './events/setCity';

// Config
import { initLocation } from '../config/initLocation';

export const $storeCity = createStore<string>(initLocation.city).on(setCity, (store, payload: string) =>
  setCityEvent(payload)
);

export const $storeAddress = createStore<string>(initLocation.address).on(setAddress, (store, payload: string) =>
  setAddressEvent(payload)
);
