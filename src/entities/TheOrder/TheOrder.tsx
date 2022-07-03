import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeAdditionally, $storeCar, $storePrice } from '~processes/order/model/store';

// Event
import { setPrice as setPriceEvent } from '~processes/order/model/events/setPrice';

// Components
import { AppButton } from '~shared/ui/AppButton';
import { AppModal } from '~shared/ui/AppModal';

// Utils
import { dateDifference } from '~shared/utils/dateDifference';
import { getPrice } from '~shared/utils/getPrice';
import { getCar } from '~entities/TheAdditionally/function/getCar';

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
  const storeCar = useStore($storeCar);
  const storeAdditionally = useStore($storeAdditionally);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  function confirmation() {
    setIsOpenModal(false);
    localStorage.setItem('confirmation', JSON.stringify(true));
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

  function initPrice() {
    const car = getCar(storeCar.brend, storeCar.model);

    if (!car || !storeAdditionally.rentalDuration.startDate || !storeAdditionally.rentalDuration.endDate) {
      return;
    }

    const price = typeof car.price === 'number' ? car.price : car.price.reduce((a, b) => a + b) / 2;
    const time = dateDifference(storeAdditionally.rentalDuration.startDate, storeAdditionally.rentalDuration.endDate);

    if (storeAdditionally.rate === 'На сутки, 1999 ₽/сутки') {
      const ratePrice = 1999;
      const newPrice = price + ratePrice * time.days + (time.hours || time.minutes ? ratePrice : 0);

      setPriceEvent(newPrice);
    }
    if (storeAdditionally.rate === 'Поминутно, 5₽/мин') {
      const ratePrice = 5;
      const newPrice = price + (time.days * 24 + time.hours) * 60 * ratePrice;
      setPriceEvent(newPrice);
    }
  }

  useEffect(() => {
    initPrice();
  });

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

      <AppModal isOpen={isOpenModal} handleOpenOrClose={setIsOpenModal}>
        <div className={cn(styles['order__confirmation'])}>
          <h3 className={cn(styles['order__confirmation-title'])}>Подтвердить заказ</h3>
          <div className={cn(styles['order__confirmation-block'])}>
            <AppButton className={cn(styles['order__confirmation-block-btn'])} handleClick={confirmation}>
              Подтвердить
            </AppButton>
            <AppButton
              className={cn(styles['order__confirmation-block-btn'])}
              handleClick={() => setIsOpenModal(false)}
              variant="red"
            >
              Вернуться
            </AppButton>
          </div>
        </div>
      </AppModal>
    </div>
  );
};
