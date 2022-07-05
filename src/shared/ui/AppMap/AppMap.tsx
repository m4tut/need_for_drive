import { FC } from 'react';
import { FullscreenControl, Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

// Store
import { useStore } from 'effector-react';
import { $storeLang } from '~processes/lang/model/store';

// Config
import { options } from './config/options';

// Styles
import cn from 'classnames';
import styles from './AppMap.module.scss';

// Images
import placemarkImg from '~assets/images/svg/placemark.png';

// Interface
import { IAddress } from '~entities/TheLoacation';

interface MapProps {
  className?: string;
  center: [number, number];
  zoom?: number;
  placemark?: IAddress[];
  handleClickPlacemark?: (address: string) => void;
}

export const AppMap: FC<MapProps> = ({ className, center, zoom = 12, handleClickPlacemark, placemark }) => {
  const lolcale = useStore($storeLang);

  const langYMaps = lolcale === 'ru' ? 'ru_RU' : 'en_US';

  function onClickPlacemark(address: string) {
    if (typeof handleClickPlacemark === 'function') {
      handleClickPlacemark(address);
    }
  }

  return (
    <YMaps key={lolcale} query={{ lang: langYMaps }}>
      <Map
        className={cn(className, styles['map'])}
        defaultState={{
          center,
          ...options,
        }}
        state={{
          center,
          zoom,
        }}
        instanceRef={(ref: any) => {
          if (ref && ref.events) {
            ref.events.add('click', () => {
              ref.balloon.close();
            });
          }
        }}
      >
        {placemark &&
          placemark.map((item) => (
            <Placemark
              key={item.value}
              modules={['geoObject.addon.balloon']}
              geometry={[...item.coordinates]}
              defaultOptions={{
                iconLayout: 'default#image',
                iconImageHref: placemarkImg,
                iconImageSize: [20, 20],
                iconImageOffset: [-10, -10],
              }}
              properties={{
                balloonContentHeader: item.text,
                balloonContent: `${item.coordinates[0]}, ${item.coordinates[1]}`,
              }}
              onClick={() => {
                onClickPlacemark(item.text);
              }}
            />
          ))}
        <FullscreenControl />
        <ZoomControl />
      </Map>
    </YMaps>
  );
};
