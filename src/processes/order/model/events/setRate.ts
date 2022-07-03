import { createEvent } from 'effector';

// Functions
import { getAdditionally } from '~processes/order/functons/getAdditionally';

// Interface
import { IAdditionally } from '~processes/order/interface/IAdditionally';

export const setRate = createEvent<string>();

export function setRateEvent(payload: string): string {
  const additionally = getAdditionally();

  const newAdditionally: IAdditionally = {
    color: additionally.color,
    rentalDuration: additionally.rentalDuration,
    rate: payload,
    babySeat: additionally.babySeat,
  };

  localStorage.setItem('additionally', JSON.stringify(newAdditionally));

  return payload;
}
