import { FC } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeModel } from '~processes/order/model/store';

// Events
import { setColor as setColorEvent } from '~processes/order/model/events/setColor';

// Components
import { RadioOrChecboxGroup } from '~shared/ui/RadioOrChecboxGroup';

// Functions
import { initGroupColor } from './function/initGroupColors';

// Styles
import cn from 'classnames';
import styles from './TheAdditionally.module.scss';

interface TheAdditionallyProps {
  className?: string;
}

export const TheAdditionally: FC<TheAdditionallyProps> = ({ className }) => {
  const storeModel = useStore($storeModel);

  const colorsGroup = initGroupColor(storeModel);

  return (
    <div className={cn(className, styles['additionally'])}>
      <div className={cn(styles['additionally__color'])}>
        <div>Цвет</div>
        <RadioOrChecboxGroup
          className={cn(styles['additionally__color-group'])}
          group={colorsGroup}
          groupName="carColor"
          initValue="all"
          handleChange={setColorEvent}
        />
      </div>
    </div>
  );
};
