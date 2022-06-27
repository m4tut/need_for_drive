import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeOrder } from '~processes/order/model/store';

// Components
import { TheLoacation } from '~entities/TheLoacation';
import { TheOrder } from '~entities/TheOrder';
import { TheAdditionally } from '~entities/TheAdditionally';
import { TheModel } from '~entities/TheModel';
import { TheTotal } from '~entities/TheTotal';

// Styles
import cn from 'classnames';
import styles from './OrderSettings.module.scss';

interface OrderSettingsProps {
  className?: string;
}

export const OrderSettings: FC<OrderSettingsProps> = ({ className }) => {
  const storeOrder = useStore($storeOrder);
  const location = useLocation();

  const OrderSection = () => {
    const fullPathname = location.pathname + location.search;
    switch (fullPathname) {
      case '/order?section=location':
        return <TheLoacation />;
      case '/order?section=model':
        return <TheModel />;
      case '/order?section=additionally':
        return <TheAdditionally />;
      case '/order?section=total':
        return <TheTotal />;
    }
  };

  return (
    <div className={cn(className, styles['order-settings'])}>
      {OrderSection()}
      <TheOrder
        orderPoints={storeOrder}
        btnSettings={{ text: 'Выбрать модель', variant: 'lightgreen', disabled: false }}
      />
    </div>
  );
};
