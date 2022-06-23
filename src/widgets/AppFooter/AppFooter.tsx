import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './AppFooter.module.scss';

interface AppFooterProps {
  className?: string;
}

export const AppFooter: FC<AppFooterProps> = ({ className }) => {
  return (
    <footer className={cn(className, styles['footer'])}>
      <a className={cn(styles['footer__link'])} href="tel:=74952342244">
        8 (495) 234-22-44
      </a>
      <div>© 2016-2019 «Need for drive»</div>
    </footer>
  );
};
