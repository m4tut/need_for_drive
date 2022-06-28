import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeOrder } from '~processes/order/model/store';

// Event
import { setOrderStep } from '~processes/order/model/events/setOrderStep';

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
    switch (location.search) {
      case '?step=location':
        setOrderStep('location');
        return <TheLoacation />;
      case '?step=model':
        setOrderStep('model');
        return <TheModel />;
      case '?step=additionally':
        setOrderStep('additionally');
        return <TheAdditionally />;
      case '?step=total':
        setOrderStep('total');
        return <TheTotal />;
    }
  };

  return (
    <div className={cn(className, styles['order-settings'])}>
      {OrderSection()}
      <TheOrder orderPoints={storeOrder.order} btnSettings={storeOrder.btnSettings} />
    </div>
  );
};
