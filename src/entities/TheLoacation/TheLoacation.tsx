import { FC, useState } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeOrderLocation } from '~processes/order/model/store';

// Event
import { setCity as setCityEvent } from '~processes/order/model/events/setCity';
import { setAddress as setAddressEvent } from '~processes/order/model/events/setAddress';

// Components
import { InputSelect } from '~shared/ui/InputSelect';

// Function
import { validateCity } from './function/validateCity';
import { validateAddress } from './function/validateAddress';
import { getAddressList } from './function/getAddressList';
import { dataFilter } from './function/dataFilter';

// Styles
import cn from 'classnames';
import styles from './TheLoacation.module.scss';

// Config
import { CITYS } from './config/citys';

// Interface
import { IAddress } from './interface/IAddress';

interface IError {
  city: string;
  address: string;
}

interface TheLoacationProps {
  className?: string;
}

export const TheLoacation: FC<TheLoacationProps> = ({ className }) => {
  const storeOrderLocation = useStore($storeOrderLocation);
  const [city, setCity] = useState<string>(storeOrderLocation.city);
  const [address, setAddress] = useState<string>(storeOrderLocation.address);
  const [addressData, setAddressData] = useState<IAddress[]>(getAddressList());
  const [error, setError] = useState<IError>({ city: '', address: '' });

  function changeCity(value: string) {
    setCity(value);
    const errorCity = validateCity(CITYS, value);
    setError({ ...error, city: errorCity });

    if (!errorCity) {
      const cityData = dataFilter(CITYS, 'text', value)[0];
      setCityEvent(value);
      setAddressData(cityData.address);
    } else {
      setAddress('');
      setAddressData([]);
      setCityEvent('');
    }
  }

  function changeAddress(value: string) {
    setAddress(value);
    const errorAddress = validateAddress(addressData, value);
    setError({ ...error, address: errorAddress });

    if (!errorAddress) {
      setAddressEvent(value);
    } else {
      setAddressEvent('');
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
          name="address"
          placeholder="Выберете пункт выдачи"
          value={address}
          error={error.address}
          disabled={addressData.length < 1}
          selectList={dataFilter(addressData, 'text', address)}
          handleChange={changeAddress}
        >
          Пункт&#160;выдачи
        </InputSelect>
      </form>
    </div>
  );
};
