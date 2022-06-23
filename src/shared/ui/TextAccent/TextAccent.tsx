import { FC, ReactNode } from 'react';

// Styles
import cn from 'classnames';
import styles from './TextAccent.module.scss';

interface TextAccentProps {
  className?: string;
  children: ReactNode;
}

export const TextAccent: FC<TextAccentProps> = ({ className, children }) => {
  return <span className={cn(className, styles['text-accent'])}>{children}</span>;
};
