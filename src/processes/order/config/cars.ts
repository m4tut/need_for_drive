import { ICar } from '../../../entities/TheModel/interface/ICar';

import elantra from '~assets/images/cars/elantra.png';
import i30n from '~assets/images/cars/i30n.png';
import creta from '~assets/images/cars/creta.png';
import sonata from '~assets/images/cars/sonata.png';

export const CARS: ICar[] = [
  {
    brend: 'Hyundai',
    model: 'Elantra',
    price: [1200, 2500],
    colors: ['Зеленый', 'Серый'],
    images: elantra,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'i30 N',
    price: [1000, 2500],
    colors: ['Синий', 'Черный'],
    images: i30n,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'Сreta',
    price: [1400, 3200],
    colors: ['Белый', 'Оранжевый'],
    images: creta,
    type: 'premium',
  },
  {
    brend: 'Hyundai',
    model: 'Sonata',
    price: [1400, 3200],
    colors: ['Темно синий', 'Белый', 'Черный'],
    images: sonata,
    type: 'premium',
  },
];
