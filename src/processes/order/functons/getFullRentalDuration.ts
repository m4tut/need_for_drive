// Functions
import { dateDifference } from '~shared/utils/dateDifference';

// Interface
import { IRentalDuration } from '../interface/IRentalDuration';

export function getFullRentalDuration(rentalDuration: IRentalDuration): string {
  if (!rentalDuration.startDate || !rentalDuration.endDate) {
    return '';
  }

  const dateDiff = dateDifference(rentalDuration.startDate, rentalDuration.endDate);

  const days = dateDiff.days ? `${dateDiff.days}д` : '';
  const hours = dateDiff.hours ? `\u00a0${dateDiff.hours}ч` : '';
  const minutes = dateDiff.minutes ? `\u00a0${dateDiff.minutes}м` : '';

  return days + hours + minutes;
}
