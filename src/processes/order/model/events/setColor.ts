import { createEvent } from 'effector';

// Functions
import { getAdditionally } from '~processes/order/functons/getAdditionally';

// Interface
import { IAdditionally } from '~processes/order/interface/IAdditionally';

export const setColor = createEvent<string>();

export function setColorEvent(payload: string): string {
  const additionally = getAdditionally();

  const newAdditionally: IAdditionally = {
    color: payload,
    rentalDuration: additionally.rentalDuration,
    rate: additionally.rate,
    babySeat: additionally.babySeat,
  };

  localStorage.setItem('additionally', JSON.stringify(newAdditionally));

  return payload;
}
