import { IAdditionally } from '../interface/IAdditionally';

export function getAdditionally(): IAdditionally {
  const storage = localStorage.getItem('additionally');

  const initObj: IAdditionally = {
    color: 'any',
    rentalDuration: { startDate: null, endDate: null },
    rate: 'rateMinShort',
    babySeat: false,
  };

  if (!storage) {
    localStorage.setItem('additionally', JSON.stringify(initObj));
    return initObj;
  }

  const storageParse: IAdditionally = JSON.parse(storage);

  const startDate = storageParse.rentalDuration.startDate;
  const endDate = storageParse.rentalDuration.endDate;

  storageParse.rentalDuration.startDate = typeof startDate === 'string' ? new Date(startDate) : startDate;
  storageParse.rentalDuration.endDate = typeof endDate === 'string' ? new Date(endDate) : endDate;

  return storageParse;
}
