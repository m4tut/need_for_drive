import { IOrder } from '../interface/IOrder';

export const INIT_ORDER: IOrder = {
  pointOfIssue: {
    name: 'Пункт выдачи',
    value: '',
    visible: false,
  },
  model: {
    name: 'Модель',
    value: '',
    visible: false,
  },
  color: {
    name: 'Цвет',
    value: '',
    visible: false,
  },
  rentalDuration: {
    name: 'Длительность аренды',
    value: {
      dateStart: undefined,
      dateEnd: undefined,
    },
    visible: false,
  },
  rate: {
    name: 'Тариф',
    value: '',
    visible: false,
  },
  tankFull: {
    name: 'Полный бак',
    value: false,
    visible: false,
  },
  babySeat: {
    name: 'Детское кресло',
    value: false,
    visible: false,
  },
  rightHandDrive: {
    name: 'Правый руль',
    value: false,
    visible: false,
  },
};
