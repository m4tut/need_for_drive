import { FC } from 'react';

// Components
import { NavLink } from 'react-router-dom';

// Config
import { NAVIGATION } from '~shared/navigation';

// Styles
import cn from 'classnames';
import styles from './NavMenu.module.scss';

interface NavMenuProps {
  className?: string;
  handleClick?: () => void;
}

export const NavMenu: FC<NavMenuProps> = ({ className }) => {
  return (
    <nav className={cn(className, styles['nav-menu'])}>
      <ul className={cn(styles['nav-menu__list'])}>
        {NAVIGATION.map((item) => {
          return (
            <li key={item.href} className={cn(styles['nav-menu__list-item'])}>
              <NavLink className={({ isActive }) => (isActive ? styles['active'] : '')} to={item.href}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
