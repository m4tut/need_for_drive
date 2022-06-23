import { FC, ReactNode } from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import cn from 'classnames';
import styles from './AppLink.module.scss';

interface AppLinkProps {
  className?: string;
  children: ReactNode;
  href: string;
  variant?: 'black' | 'white' | 'green';
  disabled?: boolean;
}

export const AppLink: FC<AppLinkProps> = ({ className, children, href, variant = 'black', disabled = false }) => {
  function classInitLink() {
    if (disabled) {
      return styles['link--disabled'];
    }

    switch (variant) {
      case 'black':
        return styles['link--black'];
      case 'white':
        return styles['link--white'];
      case 'green':
        return styles['link--green'];
    }
  }
  return (
    <Link className={cn(className, styles['link'], classInitLink())} to={href}>
      {children}
    </Link>
  );
};
