import { ICar } from '../interface/ICar';

export function getFullCar(car: ICar) {
  let model = '';

  if (car.model) {
    model = ',\u00a0' + car.model.replaceAll(' ', '\u00a0');
  }

  return `${car.brend}${model}`;
}
