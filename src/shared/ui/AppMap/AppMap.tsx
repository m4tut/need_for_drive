import { FC } from 'react';
import { FullscreenControl, GeoObject, Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';

// Config
import { options } from './config/options';

// Styles
import cn from 'classnames';
import styles from './AppMap.module.scss';

interface MapProps {
  className?: string;
  center: [number, number];
  placemark?: [number, number][];
}

export const AppMap: FC<MapProps> = ({ className, center, placemark }) => {
  return (
    <YMaps>
      <Map
        className={cn(className, styles['map'])}
        defaultState={{
          center,
          ...options,
        }}
      >
        {placemark && placemark.map((item) => <Placemark key={`placemark_${item[0]}`} geometry={[...item]} />)}
        <FullscreenControl options={{ float: 'left' }} />
        <ZoomControl />
      </Map>
    </YMaps>
  );
};
