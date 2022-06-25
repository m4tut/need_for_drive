import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheModel.module.scss';

interface TheModelProps {
  className?: string;
}

export const TheModel: FC<TheModelProps> = ({ className }) => {
  return <div className={cn(className, styles['model'])}>model</div>;
};
