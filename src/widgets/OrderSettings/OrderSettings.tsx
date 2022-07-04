import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeOrder } from '~processes/order/model/store';

// Events
import { setOrderStep } from '~processes/order/model/events/setOrderStep';

// Components
import { Container } from '~shared/layouts/Container';
import { AppBreadcrumbs } from '~shared/ui/AppBreadcrumbs';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (storeOrder.completed.total && location.search !== '?step=completed') {
      navigate('/order?step=completed');
      return;
    }

    switch (location.search) {
      case '?step=model':
        if (!storeOrder.completed.location) {
          navigate('/order?step=location');
        }
        break;
      case '?step=additionally':
        if (!storeOrder.completed.model) {
          navigate('/order?step=model');
        }
        break;
      case '?step=total':
        if (!storeOrder.completed.additionally) {
          navigate('/order?step=additionally');
        }
        break;
      default:
        if (location.search !== '?step=location' && location.search !== '?step=completed') {
          navigate('/order?step=location');
        }
        break;
    }
  });

  const OrderStep = () => {
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
      case '?step=completed':
        setOrderStep('completed');
        return <TheTotal />;
    }
  };

  return (
    <div className={cn(className, styles['order-settings'])}>
      <div className={cn(styles['order-settings__breadcrumbs'])}>
        <Container className={cn(styles['order-settings__breadcrumbs-container'])}>
          <AppBreadcrumbs breadcrumbs={storeOrder.breadcrumbs} />
        </Container>
      </div>
      <Container className={cn(styles['order-settings__content'])}>
        <div className={cn(styles['order-settings__content-left'])}>{OrderStep()}</div>
        <div className={cn(styles['order-settings__content-right'])}>
          <TheOrder orderPoints={storeOrder.order} btnSettings={storeOrder.btnSettings} />
        </div>
      </Container>
    </div>
  );
};
