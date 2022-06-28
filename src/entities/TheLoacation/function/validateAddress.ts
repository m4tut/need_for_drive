import { IAddres } from '../interface/IAddres';

export function validateAddress(pointOfIssue: IAddres[], value: string) {
  if (!value) {
    return 'Выберете пункт выдачи';
  }

  const pointOfIssueFiltered = pointOfIssue.filter((item) => item.text.toLowerCase().includes(value.toLowerCase()));

  if (!pointOfIssueFiltered.length) {
    return 'Пункт выдачи по указанному адресу отсутствует';
  }

  if (pointOfIssueFiltered[0].text.toLowerCase() !== value.toLowerCase()) {
    return 'Введите адрес полностью';
  }

  return '';
}
