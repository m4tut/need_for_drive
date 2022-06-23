import { FC } from 'react';

// Components
import { AppIcon } from '~shared/ui/AppIcon';

// Config
import { SOCIAL_LIST } from './config/socialList';

// Styles
import cn from 'classnames';
import styles from './SocialList.module.scss';

interface SocialListProps {
  className?: string;
}

export const SocialList: FC<SocialListProps> = ({ className }) => {
  return (
    <ul className={cn(className, styles['social'])}>
      {SOCIAL_LIST.map((item) => (
        <li key={item.href}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            <AppIcon name={item.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
