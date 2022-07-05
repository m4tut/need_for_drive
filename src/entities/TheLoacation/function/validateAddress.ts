import { IAddress } from '../interface/IAddress';

export function validateAddress(pointOfIssue: IAddress[], value: string) {
  if (!value) {
    return 'selectAddres';
  }

  const pointOfIssueFiltered = pointOfIssue.filter((item) => item.text.toLowerCase().includes(value.toLowerCase()));

  if (!pointOfIssueFiltered.length) {
    return 'pointOfIssueError';
  }

  if (pointOfIssueFiltered[0].text.toLowerCase() !== value.toLowerCase()) {
    return 'pointOfIssueErrorСomplete';
  }

  return '';
}
