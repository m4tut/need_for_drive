import { ICity } from '../../../entities/TheLoacation/interface/ICity';

export const CITYS: ICity[] = [
  {
    text: 'Ульяновск',
    value: 'Ulyanovsk',
    coordinates: [54.314192, 48.403132],
    address: [
      {
        text: 'проспект Нариманова, 24',
        value: 'Narimanov Avenue, 24',
        coordinates: [54.335925, 48.383845],
      },
      {
        text: 'улица Карла Маркса, 127В',
        value: 'Karl Marx street, 127B',
        coordinates: [54.326134, 48.36198],
      },
      {
        text: 'Октябрьская улица, 22',
        value: 'October street, 22',
        coordinates: [54.297523, 48.328284],
      },
      {
        text: 'Краснопролетарская улица, 2А',
        value: 'Krasnoproletarskaya street, 2A',
        coordinates: [54.326512, 48.482435],
      },
    ],
  },
  {
    text: 'Самара',
    value: 'Samara',
    coordinates: [53.195878, 50.100202],
    address: [
      {
        text: 'Московское шоссе, 17К',
        value: 'Moscow highway, 17K',
        coordinates: [53.203392, 50.16242],
      },
      {
        text: 'Самарская улица, 110',
        value: 'Samarskaya street, 110',
        coordinates: [53.192825, 50.104424],
      },
    ],
  },
  {
    text: 'Саранск',
    value: 'Saransk',
    coordinates: [54.187433, 45.183938],
    address: [
      {
        text: 'проспект Ленина, 37',
        value: 'Lenin Avenue, 37',
        coordinates: [54.193438, 45.18887],
      },
      {
        text: 'улица Фридриха Энгельса, 15к4',
        value: 'Friedrich Engels street, 15k4',
        coordinates: [54.170939, 45.126859],
      },
    ],
  },
  {
    text: 'Казань',
    value: 'Kazan',
    coordinates: [55.796127, 49.106414],
    address: [
      {
        text: 'Проточная улица, 10',
        value: 'Protochnaya street, 10',
        coordinates: [55.812469, 49.086579],
      },
      {
        text: 'улица Павлюхина, 37',
        value: 'Pavlyukhina street, 37',
        coordinates: [55.776431, 49.13569],
      },
      {
        text: 'проспект Альберта Камалеева, 34В',
        value: 'Alberta Kamaleev Avenue, 34V',
        coordinates: [55.783013, 49.193766],
      },
    ],
  },
];
