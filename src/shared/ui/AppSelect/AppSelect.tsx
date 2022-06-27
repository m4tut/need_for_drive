import { FC } from 'react';

// Components
import { CSSTransition } from 'react-transition-group';

// Styles
import cn from 'classnames';
import styles from './AppSelect.module.scss';

// Interface
import { ISelect } from './interfaces/ISelect';

interface AppSelectProps {
  className?: string;
  selectList: ISelect[];
  isOpen: boolean;
  handleChange: (selected: ISelect) => void;
}

export const AppSelect: FC<AppSelectProps> = ({ className, selectList, isOpen, handleChange }) => {
  function changeSelect(selected: ISelect) {
    handleChange(selected);
  }

  return (
    <CSSTransition in={isOpen} timeout={0} unmountOnExit>
      <ul className={cn(className, styles['select'])}>
        {selectList.map((item) => {
          return (
            <li
              onClick={() => changeSelect(item)}
              className={cn(className, styles['select__item'])}
              role="button"
              key={item.value}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </CSSTransition>
  );
};
