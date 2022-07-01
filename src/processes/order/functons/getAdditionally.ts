import { IAdditionally } from '../interface/IAdditionally';

export function getAdditionally(): IAdditionally {
  const storage = localStorage.getItem('additionally');

  const initObj: IAdditionally = { color: '' };

  if (!storage) {
    localStorage.setItem('additionally', JSON.stringify(initObj));
  }

  return storage ? JSON.parse(storage) : initObj;
}
