import { CARS, ICar } from '~entities/TheModel';

export function getCar(brend: string, model: string): ICar | undefined {
  const carFilter = CARS.filter((car) => car.brend === brend && car.model === model);

  if (!carFilter.length) {
    return;
  }

  return carFilter[0];
}
