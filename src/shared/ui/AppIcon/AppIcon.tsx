import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './AppIcon.module.scss';

interface AppIconProps {
  className?: string;
  name: string;
}

export const AppIcon: FC<AppIconProps> = ({ className, name }) => {
  return (
    <svg className={cn(className, styles['icon'])}>
      <use href={name} />
    </svg>
  );
};
