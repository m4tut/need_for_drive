import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeAdditionally, $storeCar, $storePrice } from '~processes/order/model/store';

// Event
import { setPrice as setPriceEvent } from '~processes/order/model/events/setPrice';
import { setColor as setColorEvent } from '~processes/order/model/events/setColor';
import { setBrend as setBrendEvent } from '~processes/order/model/events/setBrend';
import { setModel as setModelEvent } from '~processes/order/model/events/setModel';
import { setEndDate as setEndDateEvent } from '~processes/order/model/events/setEndDate';
import { setStartDate as setStartDateEvent } from '~processes/order/model/events/setStartDate';
import { setOrderStep as setOrderStepEvent } from '~processes/order/model/events/setOrderStep';

// Components
import { AppButton } from '~shared/ui/AppButton';
import { AppModal } from '~shared/ui/AppModal';

// Utils
import { dateDifference } from '~shared/utils/dateDifference';
import { getPrice } from '~shared/utils/getPrice';
import { getCar } from '~entities/TheAdditionally/function/getCar';
import translate from '~processes/lang/utils/translate';

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
        localStorage.setItem('confirmation', JSON.stringify(false));
        setColorEvent('any');
        setPriceEvent([2200, 5200]);
        setBrendEvent('');
        setModelEvent('');
        setEndDateEvent(null);
        setStartDateEvent(null);
        setOrderStepEvent('location');
        navigate('/order?step=location');
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

    if (storeAdditionally.rate === 'rateDateShort') {
      const ratePrice = 1999;
      const newPrice = price + ratePrice * time.days + (time.hours || time.minutes ? ratePrice : 0);

      setPriceEvent(newPrice);
    }
    if (storeAdditionally.rate === 'rateMinShort') {
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
      <h2 className={cn(styles['order__title'])}>{translate('yourOrder')}:</h2>

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
              <span className={cn(styles['order__list-item-name'])}>{name ? translate(name) : name}</span>
              <span className={cn(styles['order__list-item-dashed'])} />
              <span className={cn(styles['order__list-item-selected'])}>{value ? translate(value) : value}</span>
            </li>
          );
        })}
      </ul>

      <div className={cn(styles['order__price'])}>
        <span>{translate('price')}:&#160;</span>
        <span>{getPrice(storePrice)}</span>
      </div>

      <AppButton
        className={cn(styles['order__btn'])}
        handleClick={nextSection}
        variant={btnSettings.variant}
        disabled={btnSettings.disabled}
      >
        {translate(btnSettings.text)}
      </AppButton>

      <AppModal isOpen={isOpenModal} handleOpenOrClose={setIsOpenModal}>
        <div className={cn(styles['order__confirmation'])}>
          <h3 className={cn(styles['order__confirmation-title'])}>{translate('confirmOrder')}</h3>
          <div className={cn(styles['order__confirmation-block'])}>
            <AppButton className={cn(styles['order__confirmation-block-btn'])} handleClick={confirmation}>
              {translate('confirm')}
            </AppButton>
            <AppButton
              className={cn(styles['order__confirmation-block-btn'])}
              handleClick={() => setIsOpenModal(false)}
              variant="red"
            >
              {translate('return')}
            </AppButton>
          </div>
        </div>
      </AppModal>
    </div>
  );
};
