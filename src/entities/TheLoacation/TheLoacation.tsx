import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheLoacation.module.scss';

interface TheLoacationProps {
  className?: string;
}

export const TheLoacation: FC<TheLoacationProps> = ({ className }) => {
  return <div className={cn(className, styles['location'])}>location</div>;
};
