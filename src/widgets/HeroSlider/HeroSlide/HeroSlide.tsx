import { FC } from 'react';

// Components
import { AppButton } from '~shared/ui/AppButton';

// Utils
import translate from '~processes/lang/utils/translate';

// Styles
import cn from 'classnames';
import styles from './HeroSlide.module.scss';

// Interface
import { IHeroSlide } from '../interface/IHeroSlide';
import { useNavigate } from 'react-router-dom';

interface HeroSlideProps {
  className?: string;
  slide: IHeroSlide;
}

export const HeroSlide: FC<HeroSlideProps> = ({ className, slide }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(slide.button.href);
  }

  return (
    <section className={cn(className, styles['hero-slide'])}>
      <img className={cn(styles['hero-slide__img'])} src={slide.images} alt={slide.alt} />
      <div className={cn(styles['hero-slide__content'])}>
        <h2 className={cn(styles['hero-slide__content-title'])}>{translate(slide.title)}</h2>
        <p className={cn(styles['hero-slide__content-description'])}>{translate(slide.description)}</p>
        <AppButton handleClick={handleClick} variant={slide.button.variant}>
          {translate(slide.button.text)}
        </AppButton>
      </div>
    </section>
  );
};
