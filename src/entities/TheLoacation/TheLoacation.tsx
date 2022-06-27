import { FC, useState } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeOrder } from '~processes/order/model/store';

// Components
import { AppInput } from '~shared/ui/AppInput';
import { AppSelect, ISelect } from '~shared/ui/AppSelect';

// Utils
import { getCity } from '~shared/utils/getCity';
import { getPointOfIssue } from '~shared/utils/getPointOfIssue';
import { cityFilter } from '~shared/utils/cityFilter';

// Styles
import cn from 'classnames';
import styles from './TheLoacation.module.scss';

// Config
import { CITYS } from './config/citys';

interface IError {
  city: string;
  pointOfIssue: string;
}

interface TheLoacationProps {
  className?: string;
}

export const TheLoacation: FC<TheLoacationProps> = ({ className }) => {
  const orderStore = useStore($storeOrder);
  const [city, setCity] = useState<string>(getCity(orderStore));
  const [isVisibleCitySelect, setIsVisibleCitySelect] = useState<boolean>(false);
  const [pointOfIssue, setPointOfIssue] = useState<string>(getPointOfIssue(orderStore));
  const [error, setError] = useState<IError>({ city: '', pointOfIssue: '' });

  function changeCity(value: string) {
    setCity(value);
  }

  function focusCity() {
    setIsVisibleCitySelect(true);
  }

  function blurCity() {
    setIsVisibleCitySelect(false);
  }

  function changeCitySelect(selected: ISelect) {
    setCity(selected.text);
  }

  return (
    <div className={cn(className, styles['location'])}>
      <form name="location" className={cn(styles['location__form'])}>
        <div className={cn(styles['location__form-input'], styles['location__form-city'])}>
          <AppInput
            handleChange={changeCity}
            handleFocus={focusCity}
            handleBlur={blurCity}
            name="city"
            placeholder="Выберете город"
            value={city}
            error={error.city}
          >
            Город
          </AppInput>
          <div className={cn(styles['location__form-input-select'])}>
            <AppSelect
              selectList={cityFilter(CITYS, 'text', city)}
              isOpen={isVisibleCitySelect}
              handleChange={changeCitySelect}
            />
          </div>
        </div>
        <div className={cn(styles['location__form-input'])}>
          <AppInput
            name="pointOfIssue"
            placeholder="Выберете пункт выдачи"
            value={pointOfIssue}
            error={error.pointOfIssue}
            disabled={true}
          >
            Пункт&#160;выдачи
          </AppInput>
          <div className={cn(styles['location__form-input-select'])}>
            <AppSelect
              selectList={[]}
              isOpen={false}
              handleChange={function (selected) {
                console.log(selected);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
