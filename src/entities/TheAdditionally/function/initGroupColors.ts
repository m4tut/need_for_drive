import { ICar } from '~processes/order/interface/ICar';
import { IGroup } from '~shared/ui/RadioOrChecboxGroup';
import { getCar } from './getCar';

export function initGroupColor(car: ICar) {
  const anyColor: IGroup[] = [{ id: 'Любой', value: 'Любой', text: 'any' }];

  if (!car.model || !car.brend) {
    return anyColor;
  }

  const carSearch = getCar(car.brend, car.model);

  if (!(carSearch && carSearch.carInfo)) {
    return anyColor;
  }

  const groupColors: IGroup[] = carSearch.carInfo.map((info) => {
    return {
      id: info.color,
      value: info.color,
      text: info.color,
    };
  });

  return anyColor.concat(groupColors);
}
