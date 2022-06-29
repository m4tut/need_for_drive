import { IGroup } from '~shared/ui/RadioOrChecboxGroup';

export const FILTER_GROUP: IGroup[] = [
  {
    id: 'allModel',
    text: ' Все\u00a0модели',
    value: 'all',
  },
  {
    id: 'economyModel',
    text: 'Эконом',
    value: 'economy',
  },
  {
    id: 'premiumModel',
    text: 'Премиум',
    value: 'premium',
  },
];
