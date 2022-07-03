import { FC, ReactNode, useEffect } from 'react';

// Styles
import cn from 'classnames';
import styles from './AppModal.module.scss';
import { CSSTransition } from 'react-transition-group';

interface AppModalProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  handleOpenOrClose: (status: boolean) => void;
}

export const AppModal: FC<AppModalProps> = ({ className, children, isOpen, handleOpenOrClose }) => {
  function keydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      handleOpenOrClose(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keydown);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', keydown);
    };
  });

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
      <div className={cn(className, styles['modal'])}>
        <div className={cn(styles['modal__content'])}>{children}</div>
      </div>
    </CSSTransition>
  );
};
