import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Components
import { TheLoacation } from '~entities/TheLoacation';
import { TheOrder } from '~entities/TheOrder';

// Styles
import cn from 'classnames';
import styles from './OrderSettings.module.scss';
import { TheAdditionally } from '~entities/TheAdditionally';
import { TheModel } from '~entities/TheModel';
import { TheTotal } from '~entities/TheTotal';

interface OrderSettingsProps {
  className?: string;
}

export const OrderSettings: FC<OrderSettingsProps> = ({ className }) => {
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
      <TheOrder />
    </div>
  );
};
