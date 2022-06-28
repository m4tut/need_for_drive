import { FC, HTMLInputTypeAttribute, ReactNode } from 'react';

// Components
import { CSSTransition } from 'react-transition-group';

// Styles
import cn from 'classnames';
import styles from './AppInput.module.scss';

interface AppInputProps {
  children: ReactNode;
  className?: string;
  name: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  error?: string;
  autoComplete?: 'on' | 'off';
  placeholder?: string;
  disabled?: boolean;
  handleChange?: (value: string) => void;
  handleFocus?: () => void;
  handleBlur?: () => void;
}

export const AppInput: FC<AppInputProps> = ({
  className,
  children,
  name,
  type = 'text',
  value,
  error = '',
  autoComplete = 'off',
  disabled = false,
  placeholder,
  handleChange,
  handleFocus,
  handleBlur,
}) => {
  const errorMessage = error;

  function onChange(str: string) {
    if (typeof handleChange === 'function') {
      handleChange(str);
    }
  }

  function onFocus() {
    if (typeof handleFocus === 'function') {
      handleFocus();
    }
  }

  function onBlur() {
    if (typeof handleBlur === 'function') {
      handleBlur();
    }
  }

  function clearInput() {
    onChange('');
  }

  return (
    <div className={cn(className, styles['input'], disabled && styles['input--disabled'])}>
      <label className={cn(styles['input__label'])}>
        <span className={cn(styles['input__label-text'])}>{children}</span>
        <span className={cn(styles['input__label-field'])}>
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            autoComplete={autoComplete}
            disabled={disabled}
            formNoValidate
            onChange={({ target }) => {
              onChange(target.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          <CSSTransition in={!!error} timeout={300} classNames="fade" unmountOnExit>
            <span className={cn(styles['input__label-field-error'])}>{errorMessage}</span>
          </CSSTransition>
        </span>
      </label>
      <CSSTransition in={Boolean(value)} timeout={300} classNames="fade" unmountOnExit>
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
