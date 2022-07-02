import { ICar } from '../../../entities/TheModel/interface/ICar';

import elantra from '~assets/images/cars/elantra.png';
import i30n from '~assets/images/cars/i30n.png';
import creta from '~assets/images/cars/creta.png';
import sonata from '~assets/images/cars/sonata.png';

export const CARS: ICar[] = [
  {
    brend: 'Hyundai',
    model: 'Elantra',
    price: [12000, 25000],
    colors: ['Зеленый', 'Серый'],
    images: elantra,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'i30 N',
    price: [10000, 25000],
    colors: ['Синий', 'Черный'],
    images: i30n,
    type: 'economy',
  },
  {
    brend: 'Hyundai',
    model: 'Сreta',
    price: [14000, 32000],
    colors: ['Белый', 'Оранжевый'],
    images: creta,
    type: 'premium',
  },
  {
    brend: 'Hyundai',
    model: 'Sonata',
    price: [14000, 32000],
    colors: ['Темно синий', 'Белый', 'Черный'],
    images: sonata,
    type: 'premium',
  },
];
