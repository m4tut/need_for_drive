import { ICar } from '~processes/order/interface/ICar';
import { IGroup } from '~shared/ui/RadioOrChecboxGroup';
import { getCar } from './getCar';

export function initGroupColor(car: ICar) {
  const anyColor: IGroup[] = [{ id: 'Любой', value: 'Любой', text: 'Любой' }];

  if (!car.model || !car.brend) {
    return anyColor;
  }

  const carSearch = getCar(car.brend, car.model);

  if (!(carSearch && carSearch.colors.length)) {
    return anyColor;
  }

  const groupColors: IGroup[] = carSearch.colors.map((color: string) => {
    return {
      id: color,
      value: color,
      text: color,
    };
  });

  return anyColor.concat(groupColors);
}
