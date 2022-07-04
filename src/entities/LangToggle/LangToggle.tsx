import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './LangToggle.module.scss';
import { setLang as setLangEvent } from '~processes/lang/model/events/setLang';

interface LangToggleProps {
  className?: string;
}

export const LangToggle: FC<LangToggleProps> = ({ className }) => {
  function toggleLang() {
    const lang = localStorage.getItem('lang');

    if (lang === 'ru' || lang === 'en') {
      setLangEvent(lang);
      return;
    }

    setLangEvent('ru');
  }

  return (
    <button className={cn(className, styles['lang-toggle'])} onClick={toggleLang} type="button">
      <span>Eng</span>
    </button>
  );
};
