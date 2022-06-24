import { FC, ReactNode } from 'react';

// Components
import { AppSidebar } from '~widgets/AppSidebar';

// Styles
import cn from 'classnames';
import styles from './Default.module.scss';

interface DefaultProps {
  className?: string;
  children: ReactNode;
}

export const Default: FC<DefaultProps> = ({ className, children }) => (
  <div className={cn(className, styles['default'])}>
    <AppSidebar />
    {children}
  </div>
);
