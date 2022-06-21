import { FC, ReactNode } from 'react';

// Styles
import cn from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => (
  <div className={cn(className, styles['container'])}>{children}</div>
);
