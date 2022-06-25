import { FC, useState } from 'react';

// Styles
import cn from 'classnames';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  className?: string;
  handleClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ className, handleClick }) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [classMenu, setClassMenu] = useState<string>('');

  function onClick() {
    setIsOpenMenu(!isOpenMenu);

    if (!isOpenMenu) {
      setClassMenu(styles['burger-menu--open']);
    } else {
      setClassMenu(styles['burger-menu--close']);
    }

    handleClick();
  }

  return (
    <button className={cn(className, styles['burger-menu'], classMenu)} onClick={onClick}>
      <span />
    </button>
  );
};
