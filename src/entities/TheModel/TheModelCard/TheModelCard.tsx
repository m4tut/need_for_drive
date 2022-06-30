import { FC } from 'react';

// Utils
import { getPrice } from '~shared/utils/getPrice';

// Styles
import cn from 'classnames';
import styles from './TheModelCard.module.scss';

// Interface
import { ICar } from '../interface/ICar';

interface TheModelCardProps {
  className?: string;
  car: ICar;
  active?: boolean;
  handleClick: (car: ICar) => void;
}

export const TheModelCard: FC<TheModelCardProps> = ({ className, car, handleClick, active = false }) => {
  return (
    <div
      className={cn(className, styles['model-card'], active && styles['model-card--active'])}
      onClick={() => handleClick(car)}
      role="button"
    >
      <div className={cn(styles['model-card__content'])}>
        <div className={cn(styles['model-card__content-model'])}>{car.model}</div>
        <div className={cn(styles['model-card__content-price'])}>{getPrice(car.price)}</div>
      </div>
      <div className={cn(styles['model-card__img'])}>
        <img src={car.images} alt={`${car.brend}, ${car.model}`} />
      </div>
    </div>
  );
};
