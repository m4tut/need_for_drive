import { createEvent } from 'effector';

// Config
import { initLocation } from './../../config/initLocation';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';

export const setCity = createEvent<string>();

export function setCityEvent(payload: string): string {
  const location = initLocation;

  const newLocation: ILocation = {
    city: payload,
    address: location.address,
  };

  localStorage.setItem('location', JSON.stringify(newLocation));

  return payload;
}
