import { createEvent } from 'effector';

export const setPrice = createEvent<number | [number, number]>();

export function setPriceEvent(payload: number | [number, number]): number | [number, number] {
  return payload;
}
