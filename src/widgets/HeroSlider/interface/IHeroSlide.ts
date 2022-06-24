import { AppButtonVariant } from '~shared/ui/AppButton';

export interface IHeroSlide {
  alt: string;
  images: string;
  title: string;
  description: string;
  button: {
    href: string;
    text: string;
    variant: AppButtonVariant;
  };
}
