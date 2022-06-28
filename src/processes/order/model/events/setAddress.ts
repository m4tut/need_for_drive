import { createEvent } from 'effector';

// Functions
import { getLocation } from '~processes/order/functons/getLocation';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';

export const setAddress = createEvent<string>();

export function setAddressEvent(payload: string): string {
  const location = getLocation();

  const newLocation: ILocation = {
    city: location.city,
    address: payload,
  };

  localStorage.setItem('location', JSON.stringify(newLocation));

  return payload;
}
