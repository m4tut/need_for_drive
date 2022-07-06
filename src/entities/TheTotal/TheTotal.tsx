import { FC } from 'react';
import { useLocation } from 'react-router-dom';

// Store
import { useStore } from 'effector-react';
import { $storeCar, $storeColor, $storeStartDate } from '~processes/order/model/store';

// Functions
import { getCar } from '~entities/TheAdditionally/function/getCar';

// Utils
import translate from '~processes/lang/utils/translate';

// Styles
import cn from 'classnames';
import styles from './TheTotal.module.scss';

interface TheTotalProps {
  className?: string;
}

export const TheTotal: FC<TheTotalProps> = ({ className }) => {
  const location = useLocation();
  const storeCar = useStore($storeCar);
  const car = getCar(storeCar.brend, storeCar.model);
  const dateStart = $storeStartDate.getState();

  return (
    <div className={cn(className, styles['total'])}>
      <div className={cn(styles['total__content'])}>
        {location.search === '?step=completed' && (
          <h1 className={cn(styles['total__content-complite'])}>{translate('yourOrderConfirmed')}</h1>
        )}
        <h2 className={cn(styles['total__content-title'])}>
          {car?.brend}, {car?.model}
        </h2>
        <div className={cn(styles['total__content-number'])}>
          {$storeColor.getState() === 'any'
            ? car?.carInfo[Math.floor(Math.random() * car?.carInfo.length)].carNumber
            : car?.carInfo.filter((item) => item.color === $storeColor.getState())[0].carNumber}
        </div>
        <div>
          <span className={cn(styles['total__content-text'])}>{translate('availableFrom')} </span>
          <span>
            {dateStart?.toLocaleDateString()}&#160;
            {dateStart?.toLocaleTimeString().slice(0, -3)}
          </span>
        </div>
      </div>
      <div>
        <img src={car?.images} alt="" />
      </div>
    </div>
  );
};
