import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheOrder.module.scss';

interface TheOrderProps {
  className?: string;
}

export const TheOrder: FC<TheOrderProps> = ({ className }) => {
  return <div className={cn(className, styles['total'])}>TheOrder</div>;
};
