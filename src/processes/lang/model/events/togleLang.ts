import { createEvent } from 'effector';
import { Langs } from '../../type/langs';

export const togleLang = createEvent<Langs>();

export function togleLangEvent() {
  const lang = localStorage.getItem('lang');

  if (!(lang === 'ru' || lang === 'en')) {
    return 'ru';
  }

  return lang === 'ru' ? 'en' : 'ru';
}
