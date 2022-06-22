import { FC, useEffect, useState } from 'react';

// Components
import { BurgerMenu } from '~shared/ui/BurgerMenu';
import { CSSTransition } from 'react-transition-group';

// Styles
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import { LangToggle } from '~entities/LangToggle';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function toggleSidebar() {
    setIsOpenSidebar(!isOpenSidebar);
  }

  function resizeHandler() {
    setIsMobile(window.matchMedia('(max-width: 575px)').matches);
  }

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  });

  return (
    <aside className={cn(className, styles['sidebar'])}>
      <BurgerMenu clickHandler={toggleSidebar} />
      <CSSTransition in={isOpenSidebar} timeout={300} classNames="fade" unmountOnExit>
        <div className={cn(styles['sidebar__menu'])}>gg</div>
      </CSSTransition>
      <CSSTransition
        in={(!isOpenSidebar && !isMobile) || (isOpenSidebar && isMobile)}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className={cn(className, styles['sidebar__lang-toggle'])}>
          <LangToggle />
        </div>
      </CSSTransition>
    </aside>
  );
};
