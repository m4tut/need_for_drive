import { CARS } from '~entities/TheModel';

export function getCarColor(brend: string, model: string): string[] {
  const carFilter = CARS.filter((car) => car.brend === brend && car.model === model);

  if (!carFilter.length) {
    return [];
  }

  return carFilter[0].colors;
}
