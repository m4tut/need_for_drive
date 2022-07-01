import { FC, useState } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeBrend, $storeModel } from '~processes/order/model/store';

// Events
import { setBrend as setBrendEvent } from '~processes/order/model/events/setBrend';
import { setModel as setModelEvent } from '~processes/order/model/events/setModel';
import { setPrice as setPriceEvent } from '~processes/order/model/events/setPrice';
import { setColor as setColorEvent } from '~processes/order/model/events/setColor';

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
  const storeBrend = useStore($storeBrend);
  const storeModel = useStore($storeModel);
  const [filter, setFilter] = useState<string>('all');

  function getCars() {
    if (filter === 'all') {
      return CARS;
    }

    return CARS.filter((car) => car.type === filter);
  }

  function selectCar(car: ICar) {
    setBrendEvent(car.brend);
    setModelEvent(car.model);
    setPriceEvent(car.price);
    setColorEvent('Любой');
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
              active={storeModel === car.model && storeBrend === car.brend}
            />
          );
        })}
      </div>
    </div>
  );
};
