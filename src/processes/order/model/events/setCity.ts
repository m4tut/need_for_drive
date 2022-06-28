import { createEvent } from 'effector';

// Functions
import { getLocation } from '~processes/order/functons/getLocation';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';

export const setCity = createEvent<string>();

export function setCityEvent(payload: string): string {
  const location = getLocation();

  const newLocation: ILocation = {
    city: payload,
    address: location.address,
  };

  console.log(newLocation);

  localStorage.setItem('location', JSON.stringify(newLocation));

  return payload;
}
