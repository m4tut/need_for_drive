import { FC } from 'react';

// Components
import { NavLink, useLocation } from 'react-router-dom';

// Styles
import cn from 'classnames';
import styles from './AppBreadcrumbs.module.scss';

// Interface
import { IBreadcrumb } from './interface/IBreadcrumb';

interface AppBreadcrumbsProps {
  className?: string;
  breadcrumbs: IBreadcrumb[];
}

export const AppBreadcrumbs: FC<AppBreadcrumbsProps> = ({ className, breadcrumbs }) => {
  const location = useLocation();

  function initActiveClass(href: string) {
    const fullPathname = location.pathname + location.search;
    if (fullPathname === href) {
      return styles['active'];
    }
  }

  return (
    <nav className={cn(className, styles['breadcrumbs'])}>
      <ul className={cn(styles['breadcrumbs__list'])}>
        {breadcrumbs.map((breadcrumb) => {
          return (
            <li
              key={breadcrumb.text}
              className={cn(
                styles['breadcrumbs__list-item'],
                breadcrumb.disabled && styles['breadcrumbs__list-item--disabled']
              )}
            >
              {breadcrumb.href ? (
                <NavLink to={breadcrumb.href} className={cn(initActiveClass(breadcrumb.href))}>
                  {breadcrumb.text}
                </NavLink>
              ) : (
                <span>{breadcrumb.text}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
