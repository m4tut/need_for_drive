import { FC, useState } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeModel } from '~processes/order/model/store';

// Event
import { setModel as setModelEvent } from '~processes/order/model/events/setModel';
import { setPrice as setPriceEvent } from '~processes/order/model/events/setPrice';

// Components
import { RadioOrChecboxGroup } from '~shared/ui/RadioOrChecboxGroup';
import { TheModelCard } from './TheModelCard';

// Config
import { CARS } from './config/cars';

// Styles
import cn from 'classnames';
import styles from './TheModel.module.scss';

// Interface
import { ICar } from './interface/ICar';

// Types
import { FILTER_GROUP } from './config/filterGroup';

interface TheModelProps {
  className?: string;
}

export const TheModel: FC<TheModelProps> = ({ className }) => {
  const storeModel = useStore($storeModel);
  const [filter, setFilter] = useState<string>('all');

  function getCars() {
    if (filter === 'all') {
      return CARS;
    }

    return CARS.filter((car) => car.type === filter);
  }

  function selectCar(car: ICar) {
    setModelEvent(`${car.brend}, ${car.model}`);
    setPriceEvent(car.price);
  }

  return (
    <div className={cn(className, styles['model'])}>
      <RadioOrChecboxGroup
        className={cn(styles['model__filter'])}
        handleChange={setFilter}
        group={FILTER_GROUP}
        groupName={'modelFilter'}
        initValue="all"
      />
      <div className={cn(styles['model__cards'])}>
        {getCars().map((car) => {
          return (
            <TheModelCard
              handleClick={selectCar}
              key={car.brend + car.model}
              car={car}
              active={storeModel === `${car.brend}, ${car.model}`}
            />
          );
        })}
      </div>
    </div>
  );
};
