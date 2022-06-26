import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Components
import { AppButton, AppButtonVariant } from '~shared/ui/AppButton';

// Styles
import cn from 'classnames';
import styles from './TheOrder.module.scss';

// Interface
import { IOrder } from '~processes/order/interface/IOrder';

// Utils
import { dateDifference } from '~shared/utils/dateDifference';

interface TheOrderProps {
  className?: string;
  orderPoints: IOrder;
  btnSettings: {
    text: string;
    variant: AppButtonVariant;
    disabled: boolean;
  };
}

export const TheOrder: FC<TheOrderProps> = ({ className, orderPoints, btnSettings }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  function confirmation() {
    navigate('/order?section=completed');
  }

  function nextSection() {
    switch (location.search) {
      case '?section=location':
        navigate('/order?section=model');
        break;

      case '?section=model':
        navigate('/order?section=additionally');
        break;

      case '?section=additionally':
        navigate('/order?section=total');
        break;

      case '?section=total':
        setIsOpenModal(true);
        break;
      case '?section=completed':
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
          let selected;

          if (typeof value === 'object' && (key as keyof IOrder) === 'rentalDuration') {
            const dateDiff = value.dateStart && value.dateEnd && dateDifference(value.dateStart, value.dateEnd);

            selected = dateDiff && (
              <>
                {dateDiff.days ? <span>{dateDiff.days}д&#160;</span> : ''}
                {dateDiff.hours ? <span>{dateDiff.hours}ч</span> : ''}
                {dateDiff.minutes ? <span>{dateDiff.minutes}&#160;м</span> : ''}
              </>
            );
          } else if (typeof value === 'boolean') {
            selected = value ? 'Да' : 'Нет';
          } else {
            selected = value;
          }

          return (
            <li key={key} className={cn(styles['order__list-item'])}>
              <span className={cn(styles['order__list-item-name'])}>{name}</span>
              <span className={cn(styles['order__list-item-dashed'])} />
              <span className={cn(styles['order__list-item-selected'])}>{selected}</span>
            </li>
          );
        })}
      </ul>

      <div className={cn(styles['order__price'])}>
        <span>Цена:&#160;</span>
        <span>16 000</span>
        <span>&#160;₽</span>
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
