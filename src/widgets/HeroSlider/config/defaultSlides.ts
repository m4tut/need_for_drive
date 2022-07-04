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
    title: 'homeSlideTitle_1',
    description: 'homeSlideDescription_1',
    button: {
      href: '/parking',
      text: 'more',
      variant: 'green',
    },
  },
  {
    images: insurance,
    alt: 'insurance',
    title: 'homeSlideTitle_2',
    description: 'homeSlideDescription_2',
    button: {
      href: '/insurance',
      text: 'more',
      variant: 'blue',
    },
  },
  {
    images: petrol,
    alt: 'petrol',
    title: 'homeSlideTitle_3',
    description: 'homeSlideDescription_3',
    button: {
      href: '/petrol',
      text: 'more',
      variant: 'red',
    },
  },
  {
    images: service,
    alt: 'service',
    title: 'homeSlideTitle_4',
    description: 'homeSlideDescription_4',
    button: {
      href: '/service',
      text: 'more',
      variant: 'purple',
    },
  },
];
