import { createEvent } from 'effector';

// Functions
import { getAdditionally } from '~processes/order/functons/getAdditionally';

// Interface
import { IAdditionally } from '~processes/order/interface/IAdditionally';

export const setBabySeat = createEvent<boolean>();

export function setBabySeatEvent(payload: boolean): boolean {
  const additionally = getAdditionally();

  const newAdditionally: IAdditionally = {
    color: additionally.color,
    rentalDuration: additionally.rentalDuration,
    rate: additionally.rate,
    babySeat: payload,
  };

  localStorage.setItem('additionally', JSON.stringify(newAdditionally));

  return payload;
}
