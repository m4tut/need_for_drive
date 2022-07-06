import { Langs } from '../type/langs';

export function getLang(): Langs {
  const lang = localStorage.getItem('lang');

  if (!lang) {
    localStorage.setItem('lang', 'ru');
    return 'ru';
  }

  if (lang === 'ru' || lang === 'en') {
    return lang;
  }

  return 'ru';
}
