import { createEvent } from 'effector';

// Functions
import { getCar } from '~processes/order/functons/getCar';

// Interface
import { ICar } from '~processes/order/interface/ICar';

export const setBrend = createEvent<string>();

export function setBrendEvent(payload: string): string {
  const car = getCar();

  const newCar: ICar = {
    brend: payload,
    model: car.model,
  };

  localStorage.setItem('car', JSON.stringify(newCar));

  return payload;
}
