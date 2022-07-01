import { ICar } from '~processes/order/interface/ICar';
import { IGroup } from '~shared/ui/RadioOrChecboxGroup';
import { getCarColor } from './getCarColor';

export function initGroupColor(car: ICar) {
  const anyColor: IGroup[] = [{ id: 'all', value: 'all', text: 'Любой' }];

  if (!car.model || !car.brend) {
    return anyColor;
  }

  const carColors = getCarColor(car.brend, car.model);

  if (!carColors.length) {
    return anyColor;
  }

  const groupColors: IGroup[] = carColors.map((color) => {
    return {
      id: color,
      value: color,
      text: color,
    };
  });

  return anyColor.concat(groupColors);
}
