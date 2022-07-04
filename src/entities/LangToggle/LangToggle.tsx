import { FC } from 'react';

// Event
import { setLang as setLangEvent } from '~processes/lang/model/events/setLang';

// Styles
import cn from 'classnames';
import styles from './LangToggle.module.scss';

// Utils
import translate from '~processes/lang/utils/translate';

interface LangToggleProps {
  className?: string;
}

export const LangToggle: FC<LangToggleProps> = ({ className }) => {
  function toggleLang() {
    const lang = localStorage.getItem('lang');

    if (lang === 'ru' || lang === 'en') {
      setLangEvent(lang === 'ru' ? 'en' : 'ru');
      return;
    }

    setLangEvent('ru');
  }

  return (
    <button className={cn(className, styles['lang-toggle'])} onClick={toggleLang} type="button">
      <span>{translate('lang')}</span>
    </button>
  );
};
