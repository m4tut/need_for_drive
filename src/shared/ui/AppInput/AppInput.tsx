import { FC, HTMLInputTypeAttribute, ReactNode, useState } from 'react';

// Components
import { CSSTransition } from 'react-transition-group';

// styles
import cn from 'classnames';
import styles from './AppInput.module.scss';

interface AppInputProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  error?: string;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  changeHandler?: (value: string) => void;
}

export const AppInput: FC<AppInputProps> = ({
  className,
  innerClassName,
  children,
  name,
  type = 'text',
  value = '',
  error = '',
  autoComplete = 'off',
  placeholder,
  changeHandler,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [inputError, setInputError] = useState<boolean>(Boolean(error));

  function onChange(str: string) {
    setInputValue(str);
    setInputError(false);
    if (typeof changeHandler === 'function') {
      changeHandler(str);
    }
  }

  function clearInput() {
    onChange('');
  }

  return (
    <div className={cn(className, styles['input'])}>
      <label className={cn(innerClassName, styles['input__label'])}>
        <span className={cn(styles['input__label-text'])}>{children}</span>
        <span className={cn(styles['input__label-field'])}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={inputValue}
            autoComplete={autoComplete}
            onChange={({ target }) => {
              onChange(target.value);
            }}
          />
          <CSSTransition in={Boolean(inputError)} timeout={300} classNames="fade" unmountOnExit>
            <span className={cn(styles['input__label-field-error'])}>{error}</span>
          </CSSTransition>
        </span>
      </label>
      <CSSTransition in={Boolean(inputValue)} timeout={300} classNames="fade" unmountOnExit>
        <button className={cn(styles['input__btn'])} onClick={clearInput} type="button">
          <svg width="8" height="8" fill="none">
            <path
              d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </CSSTransition>
    </div>
  );
};
