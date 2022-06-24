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
    title: 'Бесплатная парковка',
    description:
      'Оставляйте машину на\u00a0платных городских парковках и\u00a0разрешенных местах, не\u00a0нарушая ПДД, а\u00a0также в аэропортах',
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
      href: '/insurance',
      text: 'Подробнее',
      variant: 'blue',
    },
  },
  {
    images: petrol,
    alt: 'petrol',
    title: 'Бензин',
    description: 'Полный бак на\u00a0любой заправке города за\u00a0наш счёт',
    button: {
      href: '/petrol',
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
      href: '/service',
      text: 'Подробнее',
      variant: 'purple',
    },
  },
];
