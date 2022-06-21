import { FC } from 'react';

// styles
import cn from 'classnames';
import styles from './AppSpin.module.scss';

interface AppSpinProps {
  className?: string;
  stroke?: string;
}

export const AppSpin: FC<AppSpinProps> = ({ className, stroke = '#F5F6F8' }) => {
  return (
    <span className={cn(className, styles['spin'])}>
      <svg width="28" height="28" fill="none">
        <path
          d="M26 14C26 7.37258 20.6274 2 14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26"
          stroke={stroke}
          strokeWidth="3"
        />
      </svg>
    </span>
  );
};
