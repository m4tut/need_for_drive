import { FC, useState } from 'react';

// Components
import { RadioOrChecboxGroup } from '~shared/ui/RadioOrChecboxGroup';

// Styles
import cn from 'classnames';
import styles from './TheModel.module.scss';

// Types
import { FILTER_GROUP } from './config/filterGroup';

interface TheModelProps {
  className?: string;
}

export const TheModel: FC<TheModelProps> = ({ className }) => {
  const [filter, setFilter] = useState<string>('all');

  return (
    <div className={cn(className, styles['model'])}>
      <RadioOrChecboxGroup
        className={cn(styles['model__filter'])}
        handleChange={setFilter}
        group={FILTER_GROUP}
        groupName={'modelFilter'}
        initValue="all"
      />
    </div>
  );
};
