import { IGroup } from '~shared/ui/RadioOrChecboxGroup';
import { getCarColor } from './getCarColor';

export function initGroupColor(brendOrModel: string) {
  const anyColor: IGroup[] = [{ id: 'all', value: 'all', text: 'Любой' }];
  const [model, brend] = brendOrModel.split(', ');

  if (!model || !brend) {
    return anyColor;
  }

  const carColors = getCarColor(model, brend);

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
