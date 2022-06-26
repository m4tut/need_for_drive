import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { Container } from '~shared/layouts/Container';
import { AppHeader } from '~widgets/AppHeader';
import { AppBreadcrumbs } from '~shared/ui/AppBreadcrumbs';
import { OrderSettings } from '~widgets/OrderSettings';

// Styles
import cn from 'classnames';
import styles from './Order.module.scss';

// Config
import { BREADCRUMBS } from './config/breadcrumbs';

const Order: FC = () => {
  return (
    <Default>
      <div className={cn(styles['order'])}>
        <Container>
          <AppHeader />
        </Container>

        <div className={cn(styles['order__breadcrumbs'])}>
          <Container className={cn(styles['order__breadcrumbs-container'])}>
            <AppBreadcrumbs breadcrumbs={BREADCRUMBS} />
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
