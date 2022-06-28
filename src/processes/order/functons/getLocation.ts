import { ILocation } from '../interface/ILoacation';

export function getLocation(): ILocation {
  const storage = localStorage.getItem('location');

  const initObj: ILocation = { city: '', address: '' };

  if (!storage) {
    localStorage.setItem('location', JSON.stringify(initObj));
  }

  return storage ? JSON.parse(storage) : initObj;
}
