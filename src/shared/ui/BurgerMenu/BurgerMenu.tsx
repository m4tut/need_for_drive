import { FC, useState } from 'react';

// Styles
import cn from 'classnames';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  className?: string;
  clickHandler: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ className, clickHandler }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  function onClick() {
    setIsOpenMenu(!isOpenMenu);
    clickHandler();
  }

  return (
    <button
      className={cn(className, styles['burger-menu'], isOpenMenu && styles['burger-menu--open'])}
      onClick={onClick}
    >
      <span />
    </button>
  );
};
