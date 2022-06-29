import { FC, ReactNode } from 'react';

// Styles
import cn from 'classnames';
import styles from './RadioOrChecbox.module.scss';

interface RadioOrChecboxProps {
  children: ReactNode;
  className?: string;
  id: string;
  name: string;
  value: string;
  type?: 'radio' | 'checkbox';
  checked?: boolean;
  handleChange?: (value: string) => void;
}

export const RadioOrChecbox: FC<RadioOrChecboxProps> = ({
  className,
  children,
  id,
  name,
  value,
  type = 'radio',
  checked,
  handleChange,
}) => {
  function onChange(str: string) {
    if (typeof handleChange === 'function') {
      handleChange(str);
    }
  }

  return (
    <div className={cn(className, styles['radio-checkbox'])}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        checked={checked}
        onChange={({ target }) => {
          onChange(target.value);
        }}
      />
      <label
        className={cn(
          styles['radio-checkbox__label'],
          type === 'radio' && styles['radio-checkbox__label--radio'],
          type === 'checkbox' && styles['radio-checkbox__label--checkbox']
        )}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};
