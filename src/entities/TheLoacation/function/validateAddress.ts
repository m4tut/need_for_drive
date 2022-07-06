import { Langs } from '~processes/lang/type/langs';
import { IPointOfIssue } from '../interface/IPointOfIssue';

export function validateAddress(pointOfIssue: IPointOfIssue[], value: string, locale: Langs) {
  if (!value) {
    return 'selectAddres';
  }

  const pointOfIssueFiltered = pointOfIssue.filter((item) =>
    item.value[locale].toLowerCase().includes(value.toLowerCase())
  );

  if (!pointOfIssueFiltered.length) {
    return 'pointOfIssueError';
  }

  if (pointOfIssueFiltered[0].value[locale].toLowerCase() !== value.toLowerCase()) {
    return 'pointOfIssueErrorСomplete';
  }

  return '';
}
