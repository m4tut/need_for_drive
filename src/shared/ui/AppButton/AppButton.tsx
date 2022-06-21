import { FC, ReactNode } from 'react';

// Components
import { AppSpin } from '../AppSpin';

// styles
import cn from 'classnames';
import styles from './AppButton.module.scss';

interface AppButtonProps {
  children: ReactNode;
  clickHandler: () => void;
  className?: string;
  disabled?: boolean;
  isLoader?: boolean;
  type?: 'button' | 'submit';
  mod?: 'green' | 'blue' | 'red' | 'purple';
}

export const AppButton: FC<AppButtonProps> = ({
  className,
  children,
  clickHandler,
  disabled = false,
  isLoader = false,
  type = 'button',
  mod = 'green',
}) => {
  function classInitButton() {
    if (disabled) {
      return styles['button--disabled'];
    }

    switch (mod) {
      case 'green':
        return styles['button--green'];
      case 'blue':
        return styles['button--blue'];
      case 'red':
        return styles['button--red'];
      case 'purple':
        return styles['button--purple'];
    }
  }

  function classInitLoader() {
    if (isLoader) {
      return styles['button--loader'];
    }
  }

  return (
    <button
      className={cn(className, styles['button'], classInitButton(), classInitLoader())}
      onClick={clickHandler}
      type={type}
      disabled={disabled || isLoader}
    >
      <span className={styles['button__content']}>{children}</span>
      {isLoader && <AppSpin className={styles['button__spin']} stroke={disabled ? '#fff' : '#f5f6f8'} />}
    </button>
  );
};
