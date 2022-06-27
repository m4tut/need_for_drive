import { FC, ReactNode, useState } from 'react';

// Components
import { AppInput } from '../AppInput';
import { AppSelect, ISelect } from '../AppSelect';

// Styles
import cn from 'classnames';
import styles from './InputSelect.module.scss';

interface InputSelectProps {
  className?: string;
  children: ReactNode;
  name: string;
  value: string;
  selectList: ISelect[];
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  handleChange: (value: string) => void;
}

export const InputSelect: FC<InputSelectProps> = ({
  className,
  children,
  name,
  value,
  selectList,
  handleChange,
  placeholder = '',
  error = '',
  disabled = false,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);

  function handleFocus() {
    setIsOpenSelect(true);
  }

  function handleBlur() {
    setIsOpenSelect(false);
  }

  return (
    <div className={cn(className, styles['input-select'])}>
      <AppInput
        handleChange={handleChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        name={name}
        placeholder={placeholder}
        value={value}
        error={error}
        disabled={disabled}
      >
        {children}
      </AppInput>
      <div className={cn(styles['input-select__list'])}>
        <AppSelect
          selectList={selectList}
          isOpen={isOpenSelect && selectList.length > 0}
          handleChange={(selected) => {
            handleChange(selected.text);
          }}
        />
      </div>
    </div>
  );
};
