import { createStore } from 'effector';

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
