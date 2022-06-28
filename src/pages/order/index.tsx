import { FC } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeOrder } from '~processes/order/model/store';

// Components
import { Default } from '~shared/layouts/Default';
import { Container } from '~shared/layouts/Container';
import { AppHeader } from '~widgets/AppHeader';
import { AppBreadcrumbs } from '~shared/ui/AppBreadcrumbs';
import { OrderSettings } from '~widgets/OrderSettings';

// Styles
import cn from 'classnames';
import styles from './Order.module.scss';

const Order: FC = () => {
  const storeOrder = useStore($storeOrder);

  return (
    <Default>
      <div className={cn(styles['order'])}>
        <Container>
          <AppHeader />
        </Container>

        <div className={cn(styles['order__breadcrumbs'])}>
          <Container className={cn(styles['order__breadcrumbs-container'])}>
            <AppBreadcrumbs breadcrumbs={storeOrder.breadcrumbs} />
          </Container>
        </div>

        <Container className={cn(styles['order__container'])}>
          <OrderSettings />
        </Container>
      </div>
    </Default>
  );
};

export default Order;
