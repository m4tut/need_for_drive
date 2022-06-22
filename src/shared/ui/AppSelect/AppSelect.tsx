import { FC } from 'react';

// Components
import { CSSTransition } from 'react-transition-group';

// Styles
import cn from 'classnames';
import styles from './AppSelect.module.scss';

// Interface
import { ISelect } from '~shared/interfaces/ISelect';

interface AppSelectProps {
  className?: string;
  selectList: ISelect[];
  isOpen: boolean;
  changeHandler: (value: string) => void;
}

export const AppSelect: FC<AppSelectProps> = ({ className, selectList, isOpen, changeHandler }) => {
  function changeSelect(value: string) {
    changeHandler(value);
  }

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="fade" unmountOnExit>
      <ul className={cn(className, styles['select'])}>
        {selectList.map((item) => {
          return (
            <li
              onClick={() => changeSelect(item.value)}
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
