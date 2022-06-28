import { createEvent } from 'effector';

// Config
import { initLocation } from './../../config/initLocation';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';

export const setAddress = createEvent<string>();

export function setAddressEvent(payload: string): string {
  const location = initLocation;

  const newLocation: ILocation = {
    city: location.city,
    address: payload,
  };

  localStorage.setItem('location', JSON.stringify(newLocation));

  return payload;
}
