import { createEvent } from 'effector';
import { Langs } from '../../type/langs';

export const setLang = createEvent<Langs>();

export function setLangEvent(payload: Langs) {
  localStorage.setItem('lang', payload);

  return payload;
}
