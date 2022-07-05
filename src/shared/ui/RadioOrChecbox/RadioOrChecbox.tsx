import { FC, ReactNode, useState } from 'react';

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
  handleToggle?: (status: boolean) => void;
}

export const RadioOrChecbox: FC<RadioOrChecboxProps> = ({
  className,
  children,
  id,
  name,
  value,
  type = 'radio',
  checked = false,
  handleChange,
  handleToggle,
}) => {
  const [checkedInput, setCheckedInput] = useState(checked);

  function onChange(str: string) {
    if (typeof handleChange === 'function') {
      handleChange(str);
    }
  }

  function toggle() {
    setCheckedInput(!checkedInput);
    if (typeof handleToggle === 'function') {
      handleToggle(!checkedInput);
    }
  }

  return (
    <div className={cn(className, styles['radio-checkbox'])}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        checked={type === 'checkbox' ? checkedInput : checked}
        onChange={({ target }) => {
          onChange(target.value);
        }}
        onClick={toggle}
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
