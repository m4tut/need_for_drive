import { ICar } from '../interface/ICar';

export function getCar(): ICar {
  const storage = localStorage.getItem('car');

  const initObj: ICar = { brend: '', model: '' };

  if (!storage) {
    localStorage.setItem('car', JSON.stringify(initObj));
  }

  return storage ? JSON.parse(storage) : initObj;
}
