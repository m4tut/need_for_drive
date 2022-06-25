import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { Container } from '~shared/layouts/Container';
import { AppHeader } from '~widgets/AppHeader';

// Styles
import cn from 'classnames';
import styles from './Order.module.scss';

const Order: FC = () => {
  return (
    <Default>
      <div className={cn(styles['order'])}>
        <Container>
          <AppHeader />
        </Container>
      </div>
    </Default>
  );
};

export default Order;
