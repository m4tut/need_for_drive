import { getLocation } from '../functons/getLocation';

export function initLocation() {
  const location = getLocation();

  let address = '';

  if (location.address) {
    address = ', ' + location.address.replaceAll(' ', '\u00a0');
  }
  return `${location.city}${address}`;
}
