import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storePrice } from '~processes/order/model/store';

// Components
import { AppButton } from '~shared/ui/AppButton';

// Utils
import { dateDifference } from '~shared/utils/dateDifference';
import { getPrice } from '~shared/utils/getPrice';

// Styles
import cn from 'classnames';
import styles from './TheOrder.module.scss';

// Interface
import { IOrder } from '~processes/order/interface/IOrder';
import { IOrderBtnSettings } from './interface/IOrderBtnSettings';

interface TheOrderProps {
  className?: string;
  orderPoints: IOrder;
  btnSettings: IOrderBtnSettings;
}

export const TheOrder: FC<TheOrderProps> = ({ className, orderPoints, btnSettings }) => {
  const storePrice = useStore($storePrice);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  function confirmation() {
    navigate('/order?step=completed');
  }

  function nextSection() {
    switch (location.search) {
      case '?step=location':
        navigate('/order?step=model');
        break;

      case '?step=model':
        navigate('/order?step=additionally');
        break;

      case '?step=additionally':
        navigate('/order?step=total');
        break;

      case '?step=total':
        setIsOpenModal(true);
        break;
      case '?step=completed':
        console.log('отменить заказ');
        break;
    }
  }

  return (
    <div className={cn(className, styles['order'])}>
      <h2 className={cn(styles['order__title'])}>Ваш заказ:</h2>

      <ul className={cn(styles['order__list'])}>
        {Object.keys(orderPoints).map((key) => {
          const item = orderPoints[key as keyof IOrder];

          if (!item.visible) {
            return;
          }

          const name = item.name;
          const value = item.value;

          return (
            <li key={key} className={cn(styles['order__list-item'])}>
              <span className={cn(styles['order__list-item-name'])}>{name}</span>
              <span className={cn(styles['order__list-item-dashed'])} />
              <span className={cn(styles['order__list-item-selected'])}>{value}</span>
            </li>
          );
        })}
      </ul>

      <div className={cn(styles['order__price'])}>
        <span>Цена:&#160;</span>
        <span>{getPrice(storePrice)}</span>
      </div>

      <AppButton
        className={cn(styles['order__btn'])}
        handleClick={nextSection}
        variant={btnSettings.variant}
        disabled={btnSettings.disabled}
      >
        {btnSettings.text}
      </AppButton>
    </div>
  );
};
