import { FC } from 'react';

// Components
import { Link } from 'react-router-dom';

// Utils
import { getCity } from '~shared/utils/getCity';

// Styles
import cn from 'classnames';
import styles from './AppHeader.module.scss';
import { useStore } from 'effector-react';

interface AppHeaderProps {
  className?: string;
}

export const AppHeader: FC<AppHeaderProps> = ({ className }) => {
  return (
    <header className={cn(className, styles['header'])}>
      <Link className={cn(styles['header__link'])} to="/">
        Need for drive
      </Link>
      <div className={cn(styles['header__city'])}>
        <div className={cn(styles['header__city-icon'])}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 21">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 8.5c0 5.833-7.5 10.833-7.5 10.833S1 14.333 1 8.5a7.5 7.5 0 0115 0z"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            />
          </svg>
        </div>

        <span>{getCity()}</span>
      </div>
    </header>
  );
};
