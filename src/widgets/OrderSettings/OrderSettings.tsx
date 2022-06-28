import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';

// Components
import { TheLoacation } from '~entities/TheLoacation';
import { TheOrder } from '~entities/TheOrder';
import { TheAdditionally } from '~entities/TheAdditionally';
import { TheModel } from '~entities/TheModel';
import { TheTotal } from '~entities/TheTotal';

// Styles
import cn from 'classnames';
import styles from './OrderSettings.module.scss';
import { INIT_ORDER } from '~processes/order/config/initOrder';

interface OrderSettingsProps {
  className?: string;
}

export const OrderSettings: FC<OrderSettingsProps> = ({ className }) => {
  const location = useLocation();

  const OrderSection = () => {
    switch (location.search) {
      case '?section=location':
        return <TheLoacation />;
      case '?section=model':
        return <TheModel />;
      case '?section=additionally':
        return <TheAdditionally />;
      case '?section=total':
        return <TheTotal />;
    }
  };

  return (
    <div className={cn(className, styles['order-settings'])}>
      {OrderSection()}
      <TheOrder
        orderPoints={INIT_ORDER}
        btnSettings={{ text: 'Выбрать модель', variant: 'lightgreen', disabled: false }}
      />
    </div>
  );
};
