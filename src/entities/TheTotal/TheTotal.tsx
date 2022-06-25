import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheTotal.module.scss';

interface TheTotalProps {
  className?: string;
}

export const TheTotal: FC<TheTotalProps> = ({ className }) => {
  return <div className={cn(className, styles['total'])}>TheTotal</div>;
};
