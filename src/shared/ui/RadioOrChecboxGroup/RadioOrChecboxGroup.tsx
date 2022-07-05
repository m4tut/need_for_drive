import { FC, useState } from 'react';

// Components
import { RadioOrChecbox } from '~shared/ui/RadioOrChecbox';

// Utils
import translate from '~processes/lang/utils/translate';

// Styles
import cn from 'classnames';
import styles from './RadioOrChecboxGroup.module.scss';

// Interface
import { IGroup } from './interface/IGroup';

interface RadioOrChecboxGroupProps {
  className?: string;
  initValue?: string;
  type?: 'radio' | 'checkbox';
  group: IGroup[];
  groupName: string;
  handleChange?: (value: string) => void;
}

export const RadioOrChecboxGroup: FC<RadioOrChecboxGroupProps> = ({
  className,
  type = 'radio',
  group,
  groupName,
  initValue = '',
  handleChange,
}) => {
  const [filter, setFilter] = useState<string>(initValue);

  function changeFilter(str: string) {
    setFilter(str);
    if (typeof handleChange === 'function') {
      handleChange(str);
    }
  }

  return (
    <div className={cn(className, styles['group'])}>
      {group.map((item) => {
        return (
          <RadioOrChecbox
            key={item.id}
            className={cn(styles['group-item'])}
            id={item.id}
            name={groupName}
            value={item.value}
            type={type}
            checked={filter === item.value}
            handleChange={changeFilter}
          >
            {translate(item.text)}
          </RadioOrChecbox>
        );
      })}
    </div>
  );
};
