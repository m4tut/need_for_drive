import { createStore, combine } from 'effector';

// Events
import { setAddress, setAddressEvent } from './events/setAddress';
import { setCity, setCityEvent } from './events/setCity';
import { setOrderStep, setOrderStepEvent } from './events/setOrderStep';
import { setModel, setModelEvent } from './events/setModel';
import { setPrice, setPriceEvent } from './events/setPrice';
import { setColor, setColorEvent } from './events/setColor';
import { setBrend, setBrendEvent } from './events/setBrend';
import { setRate, setRateEvent } from './events/setRate';
import { setEndDate, setEndDateEvent } from './events/setEndDate';
import { setStartDate, setStartDateEvent } from './events/setStartDate';
import { setBabySeat, setBabySeatEvent } from './events/setBabySeat';

// Functions
import { getLocation } from '../functons/getLocation';
import { getCar } from '../functons/getCar';
import { getAdditionally } from '../functons/getAdditionally';

// Controller
import { orderController } from './controller/orderController';

// Types
import { OrderStep } from '../type/OrderStep';

const location = getLocation();
const car = getCar();
const additionally = getAdditionally();

export const $storeOrderStep = createStore<OrderStep>('location').on(setOrderStep, (store, payload: OrderStep) =>
  setOrderStepEvent(payload)
);

export const $storePrice = createStore<number | [number, number]>([2200, 5200]).on(
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

export const $storeBrend = createStore<string>(car.brend).on(setBrend, (store, payload: string) =>
  setBrendEvent(payload)
);

export const $storeModel = createStore<string>(car.model).on(setModel, (store, payload: string) =>
  setModelEvent(payload)
);

export const $storeCar = combine($storeBrend, $storeModel, (brend, model) => {
  return { brend, model };
});

export const $storeColor = createStore<string>(additionally.color).on(setColor, (store, payload: string) =>
  setColorEvent(payload)
);

export const $storeStartDate = createStore<Date | null>(additionally.rentalDuration.startDate).on(
  setStartDate,
  (store, payload: Date | null) => setStartDateEvent(payload)
);

export const $storeEndDate = createStore<Date | null>(additionally.rentalDuration.endDate).on(
  setEndDate,
  (store, payload: Date | null) => setEndDateEvent(payload)
);

export const $storeDateInterval = combine($storeStartDate, $storeEndDate, (startDate, endDate) => {
  return { startDate, endDate };
});

export const $storeRate = createStore<string>(additionally.rate).on(setRate, (store, payload: string) =>
  setRateEvent(payload)
);

export const $storeBabySeat = createStore<boolean>(additionally.babySeat).on(setBabySeat, (store, payload: boolean) =>
  setBabySeatEvent(payload)
);

export const $storeAdditionally = combine(
  $storeColor,
  $storeDateInterval,
  $storeRate,
  $storeBabySeat,
  (color, rentalDuration, rate, babySeat) => {
    return { color, rentalDuration, rate, babySeat };
  }
);

export const $storeOrder = combine(
  $storeOrderStep,
  $storeOrderLocation,
  $storeCar,
  $storeAdditionally,
  (orderStep, orderLocation, orderCar, orderAdditionally) => {
    return orderController(orderStep, orderLocation, orderCar, orderAdditionally);
  }
);
