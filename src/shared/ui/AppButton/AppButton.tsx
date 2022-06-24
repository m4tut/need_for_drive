import { FC, ReactNode } from 'react';

// Components
import { AppSpin } from '../AppSpin';

// Styles
import cn from 'classnames';
import styles from './AppButton.module.scss';

// Types
import { AppButtonVariant } from './type/AppButtonVariant';

interface AppButtonProps {
  children: ReactNode;
  handleClick: () => void;
  className?: string;
  disabled?: boolean;
  isLoader?: boolean;
  type?: 'submit' | 'reset' | 'button';
  variant?: AppButtonVariant;
}

export const AppButton: FC<AppButtonProps> = ({
  className,
  children,
  handleClick,
  disabled = false,
  isLoader = false,
  type = 'button',
  variant = 'lightgreen',
}) => {
  function classInitButton() {
    if (disabled) {
      return styles['button--disabled'];
    }

    switch (variant) {
      case 'lightgreen':
        return styles['button--lightgreen'];
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
      onClick={handleClick}
      type={type}
      disabled={disabled || isLoader}
    >
      <span className={styles['button__content']}>{children}</span>
      {isLoader && <AppSpin className={styles['button__spin']} color={disabled ? '#fff' : '#f5f6f8'} />}
    </button>
  );
};
