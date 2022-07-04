import { ICar } from '../../../entities/TheModel/interface/ICar';

import elantra from '~assets/images/cars/elantra.png';
import i30n from '~assets/images/cars/i30n.png';
import creta from '~assets/images/cars/creta.png';
import sonata from '~assets/images/cars/sonata.png';

export const CARS: ICar[] = [
  {
    brend: 'Hyundai',
    model: 'Elantra',
    price: [2400, 5000],
    carInfo: [
      { color: 'Зеленый', carNumber: 'K 761 HA 73' },
      { color: 'Серый', carNumber: 'K 762 HA 73' },
    ],
    images: elantra,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'i30 N',
    price: [2000, 5000],
    carInfo: [
      { color: 'Синий', carNumber: 'K 451 HA 73' },
      { color: 'Черный', carNumber: 'K 362 HA 73' },
    ],
    images: i30n,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'Сreta',
    price: [2800, 6400],
    carInfo: [
      { color: 'Белый', carNumber: 'K 481 HA 73' },
      { color: 'Оранжевый', carNumber: 'K 222 HA 73' },
    ],
    images: creta,
    type: 'premium',
  },
  {
    brend: 'Hyundai',
    model: 'Sonata',
    price: [2800, 6400],
    carInfo: [
      { color: 'Синий', carNumber: 'K 491 HA 13' },
      { color: 'Черный', carNumber: 'K 112 HA 13' },
      { color: 'Белый', carNumber: 'K 362 HA 13' },
    ],
    images: sonata,
    type: 'premium',
  },
];
