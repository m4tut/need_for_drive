import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './LangToggle.module.scss';

interface LangToggleProps {
  className?: string;
  stroke?: string;
}

export const LangToggle: FC<LangToggleProps> = ({ className }) => {
  return (
    <button className={cn(className, styles['lang-toggle'])} type="button">
      <span>Eng</span>
    </button>
  );
};
