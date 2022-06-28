import { ILocation } from '../interface/ILoacation';

export function getFullLocation(location: ILocation) {
  let address = '';

  if (location.address) {
    address = ', ' + location.address.replaceAll(' ', '\u00a0');
  }

  return `${location.city}${address}`;
}
