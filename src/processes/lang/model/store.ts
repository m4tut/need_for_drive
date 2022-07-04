import { togleLang, togleLangEvent } from './events/togleLang';
import { createStore } from 'effector';
import { Langs } from '../type/langs';

const lang = localStorage.getItem('lang');

export const $storeLang = createStore<Langs>(lang && (lang === 'ru' || lang === 'en') ? lang : 'ru').on(
  togleLang,
  (store: Langs) => togleLangEvent()
);
