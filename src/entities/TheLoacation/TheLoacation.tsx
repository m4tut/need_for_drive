import { FC, useState } from 'react';
import { useIntl } from 'react-intl';

// Store
import { useStore } from 'effector-react';
import { $storeOrderLocation } from '~processes/order/model/store';

// Events
import { setCity as setCityEvent } from '~processes/order/model/events/setCity';
import { setAddress as setAddressEvent } from '~processes/order/model/events/setAddress';
import { setPrice as setPriceEvent } from '~processes/order/model/events/setPrice';

// Components
import { AppMap } from '~shared/ui/AppMap';
import { InputSelect } from '~shared/ui/InputSelect';

// Function
import { validateCity } from './function/validateCity';
import { validateAddress } from './function/validateAddress';
import { getAddressList } from './function/getAddressList';
import { dataFilter } from './function/dataFilter';
import { getCoordinates } from './function/getCoordinates';

// Utils
import translate from '~processes/lang/utils/translate';

// Styles
import cn from 'classnames';
import styles from './TheLoacation.module.scss';

// Config
import { CITYS } from '../../processes/order/config/citys';

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
  const intl = useIntl();
  const storeOrderLocation = useStore($storeOrderLocation);
  const [city, setCity] = useState<string>(storeOrderLocation.city);
  const [address, setAddress] = useState<string>(storeOrderLocation.address);
  const [addressData, setAddressData] = useState<IAddress[]>(getAddressList());
  const [error, setError] = useState<IError>({ city: '', address: '' });
  const [zoom, setZoom] = useState<number>(storeOrderLocation.address ? 14 : 11);
  const [coordinates, setCoordinates] = useState<[number, number]>(
    getCoordinates(storeOrderLocation.city, storeOrderLocation.address)
  );

  function changeCity(value: string) {
    setCity(value);
    const errorCity = validateCity(CITYS, value);
    setError({ ...error, city: errorCity });

    if (!errorCity) {
      const cityData = dataFilter(CITYS, 'text', value)[0];
      setZoom(11);
      setAddressData(cityData.address);
      setCityEvent(value);
    } else {
      setZoom(11);
      setAddress('');
      setAddressData([]);
      setCityEvent('');
      setPriceEvent([1000, 3200]);
    }
    setCoordinates(getCoordinates(value, storeOrderLocation.address));
  }

  function changeAddress(value: string) {
    setAddress(value);
    const errorAddress = validateAddress(addressData, value);
    setError({ ...error, address: errorAddress });

    if (!errorAddress) {
      setAddressEvent(value);
      setZoom(14);
    } else {
      setZoom(11);
      setAddressEvent('');
      setPriceEvent([1000, 3200]);
    }
    setCoordinates(getCoordinates(storeOrderLocation.city, value));
  }

  return (
    <div className={cn(className, styles['location'])}>
      <form name="location" className={cn(styles['location__form'])}>
        <InputSelect
          className={cn(styles['location__form-city'])}
          name="city"
          placeholder={intl.formatMessage({ id: 'selectCity' })}
          value={city}
          error={error.city}
          selectList={dataFilter(CITYS, 'text', city)}
          handleChange={changeCity}
        >
          {translate('city')}
        </InputSelect>

        <InputSelect
          name="address"
          placeholder={intl.formatMessage({ id: 'selectAddres' })}
          value={address}
          error={error.address}
          disabled={!addressData.length}
          selectList={dataFilter(addressData, 'text', address)}
          handleChange={changeAddress}
        >
          {translate('pointOfIssue')}
        </InputSelect>
      </form>

      <div className={cn(styles['location__map'])}>
        <div className={cn(styles['location__map-text'])}>{translate('selectMap')}</div>
        <AppMap center={coordinates} placemark={addressData} zoom={zoom} handleClickPlacemark={changeAddress} />
      </div>
    </div>
  );
};
