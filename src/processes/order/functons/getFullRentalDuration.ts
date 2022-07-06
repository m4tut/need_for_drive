// Functions
import { dateDifference } from '~shared/utils/dateDifference';

// Types
import { Langs } from '../../lang/type/langs';

// Interface
import { IRentalDuration } from '../interface/IRentalDuration';

export function getFullRentalDuration(rentalDuration: IRentalDuration, locale: Langs): string {
  if (!rentalDuration.startDate || !rentalDuration.endDate) {
    return '';
  }

  const dateDiff = dateDifference(rentalDuration.startDate, rentalDuration.endDate);

  const days = dateDiff.days ? `${dateDiff.days}${locale === 'ru' ? 'д' : 'd'}` : '';
  const hours = dateDiff.hours ? `\u00a0${dateDiff.hours}${locale === 'ru' ? 'ч' : 'h'}` : '';
  const minutes = dateDiff.minutes ? `\u00a0${dateDiff.minutes}${locale === 'ru' ? 'м' : 'm'}` : '';

  return days + hours + minutes;
}
