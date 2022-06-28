import { FC, useState } from 'react';

// Components
import { InputSelect } from '~shared/ui/InputSelect';

// Utils
import { getCity } from '~shared/utils/getCity';
import { getPointOfIssue } from '~shared/utils/getPointOfIssue';

// Function
import { validateCity } from './function/validateCity';
import { validatePointOfIssue } from './function/validatePointOfIssue';
import { getDataPointOfIssue } from './function/getDataPointOfIssue';
import { dataFilter } from './function/dataFilter';

// Styles
import cn from 'classnames';
import styles from './TheLoacation.module.scss';

// Config
import { CITYS } from './config/citys';

// Interface
import { IPointOfIssue } from './interface/IPointOfIssue';
import { setPointOfIssue } from '~processes/order/model/events/setPointOfIssue';

interface IError {
  city: string;
  point: string;
}

interface TheLoacationProps {
  className?: string;
}

export const TheLoacation: FC<TheLoacationProps> = ({ className }) => {
  const [city, setCity] = useState<string>(getCity());
  const [point, setPoint] = useState<string>(getPointOfIssue());
  const [pointData, setPointData] = useState<IPointOfIssue[]>(getDataPointOfIssue());
  const [error, setError] = useState<IError>({ city: '', point: '' });

  function changeCity(value: string) {
    setCity(value);
    const errorCity = validateCity(CITYS, value);
    setError({ ...error, city: errorCity });

    if (!errorCity) {
      const cityData = dataFilter(CITYS, 'text', value)[0];
      setPointData(cityData.pointOfIssue);
      setPointOfIssue({ city: value, point: '' });
    } else {
      setPoint('');
      setPointData([]);
      setPointOfIssue({ city: '', point: '' });
    }
  }

  function changePointOfIssue(value: string) {
    setPoint(value);
    const errorPoint = validatePointOfIssue(pointData, value);
    setError({ ...error, point: errorPoint });

    if (!errorPoint) {
      setPointOfIssue({ city: city, point: value });
    } else {
      setPointOfIssue({ city: city, point: '' });
    }
  }

  return (
    <div className={cn(className, styles['location'])}>
      <form name="location" className={cn(styles['location__form'])}>
        <InputSelect
          className={cn(styles['location__form-city'])}
          name="city"
          placeholder="Выберете город"
          value={city}
          error={error.city}
          selectList={dataFilter(CITYS, 'text', city)}
          handleChange={changeCity}
        >
          Город
        </InputSelect>

        <InputSelect
          name="point"
          placeholder="Выберете пункт выдачи"
          value={point}
          error={error.point}
          disabled={pointData.length < 1}
          selectList={pointData}
          handleChange={changePointOfIssue}
        >
          Пункт&#160;выдачи
        </InputSelect>
      </form>
    </div>
  );
};
