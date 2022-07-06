import { setLang, setLangEvent } from './events/setLang';
import { createStore } from 'effector';

// Types
import { Langs } from '../type/langs';

// Functions
import { getLang } from '../function/getLang';

const lang = getLang();

export const $storeLang = createStore<Langs>(lang).on(setLang, (store: Langs, payload: Langs) => setLangEvent(payload));
