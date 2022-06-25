import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheAdditionally.module.scss';

interface TheAdditionallyProps {
  className?: string;
}

export const TheAdditionally: FC<TheAdditionallyProps> = ({ className }) => {
  return <div className={cn(className, styles['additionally'])}>TheAdditionally</div>;
};
