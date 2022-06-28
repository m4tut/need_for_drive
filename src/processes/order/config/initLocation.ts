import { ILocation } from '../interface/ILoacation';

const storage = localStorage.getItem('location');

const initObj: ILocation = { city: '', address: '' };

if (!storage) {
  localStorage.setItem('location', JSON.stringify(initObj));
}

export const initLocation: ILocation = storage ? JSON.parse(storage) : initObj;
