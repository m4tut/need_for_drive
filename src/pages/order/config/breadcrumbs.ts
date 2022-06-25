import { IBreadcrumb } from '~shared/ui/AppBreadcrumbs';

export const BREADCRUMBS: IBreadcrumb[] = [
  {
    href: '/order?section=location',
    text: 'Местоположение',
  },
  {
    href: '/order?section=model',
    text: 'Модель',
    disabled: true,
  },
  {
    href: '/order?section=additionally',
    text: 'Дополнительно',
    disabled: true,
  },
  {
    href: '/order?section=total',
    text: 'Итого',
    disabled: true,
  },
];
