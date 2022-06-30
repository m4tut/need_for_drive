import { createEvent } from 'effector';

export const setColor = createEvent<string>();

export function setColorEvent(payload: string): string {
  localStorage.setItem('color', payload);

  return payload;
}
