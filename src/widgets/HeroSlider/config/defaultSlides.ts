import { IHeroSlide } from '../interface/IHeroSlide';

// Images
import parking from '~assets/images/sliders/home/parking.jpg';
import insurance from '~assets/images/sliders/home/insurance.jpg';
import petrol from '~assets/images/sliders/home/petrol.jpg';
import service from '~assets/images/sliders/home/service.jpg';

export const DEFAULT_SLIDES: IHeroSlide[] = [
  {
    alt: 'parking',
    images: parking,
    title: 'Бесплатный парковка',
    description:
      'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах',
    button: {
      href: '/parking',
      text: 'Подробнее',
      variant: 'green',
    },
  },
  {
    images: insurance,
    alt: 'insurance',
    title: 'Страховка',
    description: 'Полная страховка страховка автомобиля',
    button: {
      href: '/parking',
      text: 'Подробнее',
      variant: 'blue',
    },
  },
  {
    images: petrol,
    alt: 'petrol',
    title: 'Бензин',
    description: 'Полный бак на любой заправке города за наш счёт',
    button: {
      href: '/parking',
      text: 'Подробнее',
      variant: 'red',
    },
  },
  {
    images: service,
    alt: 'service',
    title: 'Обслуживание',
    description: 'Автомобиль проходит еженедельное ТО',
    button: {
      href: '/parking',
      text: 'Подробнее',
      variant: 'purple',
    },
  },
];
