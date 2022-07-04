import { setLang, setLangEvent } from './events/setLang';
import { createStore } from 'effector';
import { Langs } from '../type/langs';

const lang = localStorage.getItem('lang');

export const $storeLang = createStore<Langs>(lang && (lang === 'ru' || lang === 'en') ? lang : 'ru').on(
  setLang,
  (store: Langs, payload: Langs) => setLangEvent(payload)
);
