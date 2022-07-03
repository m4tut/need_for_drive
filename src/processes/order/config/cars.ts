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
    colors: ['Зеленый', 'Серый'],
    images: elantra,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'i30 N',
    price: [2000, 5000],
    colors: ['Синий', 'Черный'],
    images: i30n,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'Сreta',
    price: [2800, 6400],
    colors: ['Белый', 'Оранжевый'],
    images: creta,
    type: 'premium',
  },
  {
    brend: 'Hyundai',
    model: 'Sonata',
    price: [2800, 6400],
    colors: ['Темно синий', 'Белый', 'Черный'],
    images: sonata,
    type: 'premium',
  },
];
