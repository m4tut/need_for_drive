import { createEvent } from 'effector';

export const setModel = createEvent<string>();

export function setModelEvent(payload: string): string {
  localStorage.setItem('model', payload);

  return payload;
}
